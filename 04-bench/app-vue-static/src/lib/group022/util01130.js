// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01130A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 25;
  } catch (e) {
    return 20;
  }
}

export function calcu01130B(x) {
  switch (x % 6) {
    case 0: return x + 4;
    case 1: return x - 25;
    default: return x * 20;
  }
}

export const Ku01130 = 788;
