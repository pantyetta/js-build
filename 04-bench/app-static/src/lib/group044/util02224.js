// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02224A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 14;
  } catch (e) {
    return 12;
  }
}

export function calcu02224B(x) {
  switch (x % 3) {
    case 0: return x + 14;
    case 1: return x - 14;
    default: return x * 12;
  }
}

export const Ku02224 = 262;
