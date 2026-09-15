// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01899A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 3;
  } catch (e) {
    return 5;
  }
}

export function calcu01899B(x) {
  switch (x % 4) {
    case 0: return x + 14;
    case 1: return x - 3;
    default: return x * 5;
  }
}

export const Ku01899 = 165;
