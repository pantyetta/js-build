// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01673A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 3;
  } catch (e) {
    return 2;
  }
}

export function calcu01673B(x) {
  switch (x % 6) {
    case 0: return x + 18;
    case 1: return x - 3;
    default: return x * 2;
  }
}

export const Ku01673 = 602;
