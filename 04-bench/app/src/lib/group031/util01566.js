// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01566A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 12;
  } catch (e) {
    return 29;
  }
}

export function calcu01566B(x) {
  switch (x % 3) {
    case 0: return x + 4;
    case 1: return x - 12;
    default: return x * 29;
  }
}

export const Ku01566 = 165;
