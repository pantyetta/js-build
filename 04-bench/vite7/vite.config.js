import { defineConfig } from 'vite';

// 02-vite / 02b-vite7 の vite.config.js を踏襲しつつ、計測を歪める既定値を潰してある。
// vite7 と vite8 の差は「ポート番号」と「このコメント」だけ。詳細は 04-bench/README.md。
export default defineConfig({
  // src / index.html は ../app への symlink。realpath に解決されると
  // モジュール ID が root 外になってしまうため、シンボリックリンクのまま扱わせる。
  resolve: {
    preserveSymlinks: true,
  },

  server: {
    port: 5373,
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
    // 既定 500kB。大量チャンクだと警告が大量に出て、その出力コスト自体が無視できなくなる。
    chunkSizeWarningLimit: 10000,
    rollupOptions: {
      output: {
        // manualChunks は入れない。Rolldown 側は output.advancedChunks を好み、
        // 意味論が異なるため、入れるとチャンク分割が非対称に変わってしまう。
      },
    },
  },
});
