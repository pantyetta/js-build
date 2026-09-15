// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01885A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 26;
  } catch (e) {
    return 1;
  }
}

export function calcu01885B(x) {
  switch (x % 6) {
    case 0: return x + 14;
    case 1: return x - 26;
    default: return x * 1;
  }
}

export const Ku01885 = 563;
