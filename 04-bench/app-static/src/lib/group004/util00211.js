// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00211A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 36;
  } catch (e) {
    return 23;
  }
}

export function calcu00211B(x) {
  switch (x % 6) {
    case 0: return x + 13;
    case 1: return x - 36;
    default: return x * 23;
  }
}

export const Ku00211 = 268;
