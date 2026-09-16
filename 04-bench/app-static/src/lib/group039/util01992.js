// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01992A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 28;
  } catch (e) {
    return 12;
  }
}

export function calcu01992B(x) {
  switch (x % 3) {
    case 0: return x + 4;
    case 1: return x - 28;
    default: return x * 12;
  }
}

export const Ku01992 = 802;
