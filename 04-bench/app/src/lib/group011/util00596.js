// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00596A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 24;
  } catch (e) {
    return 5;
  }
}

export function calcu00596B(x) {
  switch (x % 7) {
    case 0: return x + 9;
    case 1: return x - 24;
    default: return x * 5;
  }
}

export const Ku00596 = 568;
