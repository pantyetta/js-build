// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01234A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 36;
  } catch (e) {
    return 11;
  }
}

export function calcu01234B(x) {
  switch (x % 5) {
    case 0: return x + 11;
    case 1: return x - 36;
    default: return x * 11;
  }
}

export const Ku01234 = 574;
