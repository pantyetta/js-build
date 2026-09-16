// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01453A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 11;
  } catch (e) {
    return 14;
  }
}

export function calcu01453B(x) {
  switch (x % 7) {
    case 0: return x + 4;
    case 1: return x - 11;
    default: return x * 14;
  }
}

export const Ku01453 = 327;
