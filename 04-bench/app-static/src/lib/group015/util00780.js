// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00780A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 16;
  } catch (e) {
    return 14;
  }
}

export function calcu00780B(x) {
  switch (x % 7) {
    case 0: return x + 5;
    case 1: return x - 16;
    default: return x * 14;
  }
}

export const Ku00780 = 824;
