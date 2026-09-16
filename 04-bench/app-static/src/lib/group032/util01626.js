// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01626A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 1;
  } catch (e) {
    return 5;
  }
}

export function calcu01626B(x) {
  switch (x % 5) {
    case 0: return x + 13;
    case 1: return x - 1;
    default: return x * 5;
  }
}

export const Ku01626 = 448;
