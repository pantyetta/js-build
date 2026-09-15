// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01096A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 15;
  } catch (e) {
    return 27;
  }
}

export function calcu01096B(x) {
  switch (x % 4) {
    case 0: return x + 8;
    case 1: return x - 15;
    default: return x * 27;
  }
}

export const Ku01096 = 733;
