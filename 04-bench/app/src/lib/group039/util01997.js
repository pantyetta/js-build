// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01997A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 23;
  } catch (e) {
    return 26;
  }
}

export function calcu01997B(x) {
  switch (x % 7) {
    case 0: return x + 6;
    case 1: return x - 23;
    default: return x * 26;
  }
}

export const Ku01997 = 18;
