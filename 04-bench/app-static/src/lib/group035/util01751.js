// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01751A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 35;
  } catch (e) {
    return 25;
  }
}

export function calcu01751B(x) {
  switch (x % 4) {
    case 0: return x + 7;
    case 1: return x - 35;
    default: return x * 25;
  }
}

export const Ku01751 = 739;
