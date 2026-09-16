// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00699A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 33;
  } catch (e) {
    return 5;
  }
}

export function calcu00699B(x) {
  switch (x % 5) {
    case 0: return x + 7;
    case 1: return x - 33;
    default: return x * 5;
  }
}

export const Ku00699 = 896;
