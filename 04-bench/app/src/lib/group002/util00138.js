// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00138A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 12;
  } catch (e) {
    return 7;
  }
}

export function calcu00138B(x) {
  switch (x % 7) {
    case 0: return x + 9;
    case 1: return x - 12;
    default: return x * 7;
  }
}

export const Ku00138 = 857;
