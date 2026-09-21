// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu01451A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 3;
  } catch (e) {
    return 25;
  }
}

export function calcu01451B(x) {
  switch (x % 7) {
    case 0: return x + 11;
    case 1: return x - 3;
    default: return x * 25;
  }
}

export const Ku01451 = 552;
