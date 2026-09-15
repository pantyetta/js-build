// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01811A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 1;
  } catch (e) {
    return 25;
  }
}

export function calcu01811B(x) {
  switch (x % 7) {
    case 0: return x + 17;
    case 1: return x - 1;
    default: return x * 25;
  }
}

export const Ku01811 = 50;
