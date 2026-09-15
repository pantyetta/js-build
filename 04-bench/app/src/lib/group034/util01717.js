// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01717A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 32;
  } catch (e) {
    return 13;
  }
}

export function calcu01717B(x) {
  switch (x % 4) {
    case 0: return x + 3;
    case 1: return x - 32;
    default: return x * 13;
  }
}

export const Ku01717 = 790;
