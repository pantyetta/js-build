// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00254A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 6;
  } catch (e) {
    return 29;
  }
}

export function calcu00254B(x) {
  switch (x % 7) {
    case 0: return x + 12;
    case 1: return x - 6;
    default: return x * 29;
  }
}

export const Ku00254 = 417;
