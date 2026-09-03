const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// webpack の設定は「1つの巨大なオブジェクト」。
// 覚えるのは entry / output / module.rules / plugins / optimization の5ブロックだけでいい。
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    // ① どこから依存グラフを辿り始めるか
    entry: './src/main.js',

    // ② どこに何という名前で吐くか
    output: {
      path: path.resolve(__dirname, 'dist'),
      // [contenthash] = 中身が変わった時だけファイル名が変わる → 長期キャッシュが効く
      filename: isProd ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: isProd ? '[name].[contenthash:8].chunk.js' : '[name].chunk.js',
      assetModuleFilename: 'assets/[name].[hash:8][ext]',
      clean: true, // ビルド前に dist を掃除
    },

    // ③ 拡張子ごとの「変換方法」。webpack の心臓部。
    //    webpack 自身は JS しか理解しない。JS 以外は loader が JS に変換して初めて扱える。
    module: {
      rules: [
        {
          test: /\.css$/i,
          // loader は「右から左」に適用される。
          //   css-loader:   CSS を読んで @import/url() を解決し、JS モジュールに変換
          //   style-loader: それを実行時に <style> タグとして document に挿入 (dev 向き)
          //   MiniCssExtractPlugin.loader: 代わりに別の .css ファイルとして吐く (本番向き)
          use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
        {
          // 画像やフォントは webpack 5 の Asset Modules で loader 不要になった
          test: /\.(png|jpe?g|gif|svg|woff2?)$/i,
          type: 'asset', // 8KB 未満なら自動で data URI、それ以上ならファイル出力
        },
        // TypeScript を足すならここに1ルール増やすだけ:
        // { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        // Babel を足すなら:
        // { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      ],
    },

    // ④ ビルド工程全体に介入する仕組み。loader が「ファイル1個の変換」なのに対し、
    //    plugin は「コンパイル全体のライフサイクルにフック」する
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // <script> を自動で差し込んでくれる
      }),
      ...(isProd ? [new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css' })] : []),
    ],

    // ⑤ 最適化。mode: 'production' にすると minify と tree shaking は自動で ON
    optimization: {
      splitChunks: {
        chunks: 'all', // node_modules 由来のコードを vendor chunk に自動分離
      },
    },

    // 開発時の挙動
    devServer: {
      port: 8080,
      hot: true, // HMR
      static: false,
    },

    // source map の種類。dev は速さ優先、prod は正確さ優先の定番の組み合わせ
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',

    // 拡張子の省略を許す設定。Vite/esbuild でも同等のものがある
    resolve: {
      extensions: ['.js', '.mjs', '.json'],
    },
  };
};
