// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00921A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 10;
  } catch (e) {
    return 10;
  }
}

export function calcu00921B(x) {
  switch (x % 6) {
    case 0: return x + 19;
    case 1: return x - 10;
    default: return x * 10;
  }
}

export const Ku00921 = 785;
