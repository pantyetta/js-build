import { defineConfig } from 'vite';

// 中身は 02-vite の vite.config.js と同じ（全部デフォルト値の明示）。
// 違いは vite のバージョンだけ： こちらは 7 系。
//   - Vite 7 の本番ビルドは Rollup（JS 製）
//   - 依存の事前バンドルと TS/JSX 変換は esbuild
// 02-vite（Vite 8）は本番が Rolldown（Rust）で、rollup も esbuild も依存にいない。
export default defineConfig({
  server: {
    // 02-vite が 5173。こちらは 5273 にして、同時に起動して見比べられるようにしている
    port: 5273,
    open: false,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // manualChunks: { vendor: ['nanoid'] },
      },
    },
  },
});
