// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01179A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 29;
  } catch (e) {
    return 26;
  }
}

export function calcu01179B(x) {
  switch (x % 6) {
    case 0: return x + 5;
    case 1: return x - 29;
    default: return x * 26;
  }
}

export const Ku01179 = 451;
