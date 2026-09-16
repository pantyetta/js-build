// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01237A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 9;
  } catch (e) {
    return 20;
  }
}

export function calcu01237B(x) {
  switch (x % 6) {
    case 0: return x + 17;
    case 1: return x - 9;
    default: return x * 20;
  }
}

export const Ku01237 = 75;
