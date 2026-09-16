// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00118A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 23;
  } catch (e) {
    return 14;
  }
}

export function calcu00118B(x) {
  switch (x % 3) {
    case 0: return x + 7;
    case 1: return x - 23;
    default: return x * 14;
  }
}

export const Ku00118 = 620;
