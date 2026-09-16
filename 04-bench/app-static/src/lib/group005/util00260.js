// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00260A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 2;
  } catch (e) {
    return 12;
  }
}

export function calcu00260B(x) {
  switch (x % 6) {
    case 0: return x + 18;
    case 1: return x - 2;
    default: return x * 12;
  }
}

export const Ku00260 = 134;
