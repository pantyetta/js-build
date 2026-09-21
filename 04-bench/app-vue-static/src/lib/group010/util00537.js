// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール（Vue 非依存）。

export function calcu00537A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 27;
  } catch (e) {
    return 15;
  }
}

export function calcu00537B(x) {
  switch (x % 6) {
    case 0: return x + 7;
    case 1: return x - 27;
    default: return x * 15;
  }
}

export const Ku00537 = 227;
