// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01999A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 13;
  } catch (e) {
    return 11;
  }
}

export function calcu01999B(x) {
  switch (x % 6) {
    case 0: return x + 7;
    case 1: return x - 13;
    default: return x * 11;
  }
}

export const Ku01999 = 653;
