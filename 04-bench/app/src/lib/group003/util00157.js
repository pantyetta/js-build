// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00157A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 4;
  } catch (e) {
    return 13;
  }
}

export function calcu00157B(x) {
  switch (x % 5) {
    case 0: return x + 6;
    case 1: return x - 4;
    default: return x * 13;
  }
}

export const Ku00157 = 918;
