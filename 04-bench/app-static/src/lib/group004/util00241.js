// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00241A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 24;
  } catch (e) {
    return 29;
  }
}

export function calcu00241B(x) {
  switch (x % 3) {
    case 0: return x + 19;
    case 1: return x - 24;
    default: return x * 29;
  }
}

export const Ku00241 = 643;
