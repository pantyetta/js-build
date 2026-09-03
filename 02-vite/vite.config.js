import { defineConfig } from 'vite';

// Vite の設定ファイルは「ほぼ空でも動く」のが特徴。
// 下の項目は全部デフォルト値の明示であって、消しても挙動は変わらない。
export default defineConfig({
  // dev サーバーの設定
  server: {
    port: 5173,
    open: false,
  },

  // 本番ビルド(= Rollup)の設定
  build: {
    outDir: 'dist',
    sourcemap: true,
    // 2.5KB 未満のアセットは base64 でインライン化される閾値
    assetsInlineLimit: 4096,
    // Rollup にそのまま渡るオプション。細かい chunk 制御はここでやる
    rollupOptions: {
      output: {
        // 例: 依存をまとめて vendor chunk にする
        // manualChunks: { vendor: ['nanoid'] },
      },
    },
  },
});
