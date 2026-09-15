// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00737A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 8;
  } catch (e) {
    return 24;
  }
}

export function calcu00737B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 8;
    default: return x * 24;
  }
}

export const Ku00737 = 923;
