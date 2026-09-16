import { defineConfig } from 'vite';

// vite7/ と同じ設定。違いは参照先が ../app-static（動的 import なし・単一バンドル）と
// ポート番号だけ。詳細は 04-bench/README.md。
export default defineConfig({
  // src / index.html は ../app-static への symlink。realpath に解決されると
  // モジュール ID が root 外になってしまうため、シンボリックリンクのまま扱わせる。
  resolve: {
    preserveSymlinks: true,
  },

  server: {
    port: 5374,
    open: false,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsInlineLimit: 4096,
    target: 'es2020',
    // 既定 true。出力チャンクを全部 gzip してサイズ表示するだけの処理で、
    // チャンクが多いと数秒〜数十秒がバンドルと無関係に乗る。7 と 8 で実装も違うので切る。
    reportCompressedSize: false,
    // 既定 500kB。単一バンドルだと確実に超えるので、警告の出力コストを避けるために上げる。
    chunkSizeWarningLimit: 10000,
    rollupOptions: {
      output: {
        // manualChunks は入れない。Rolldown 側は output.advancedChunks を好み、
        // 意味論が異なるため、入れるとチャンク分割が非対称に変わってしまう。
      },
    },
  },
});
