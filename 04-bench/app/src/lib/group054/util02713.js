// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02713A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 28;
  } catch (e) {
    return 14;
  }
}

export function calcu02713B(x) {
  switch (x % 5) {
    case 0: return x + 6;
    case 1: return x - 28;
    default: return x * 14;
  }
}

export const Ku02713 = 328;
