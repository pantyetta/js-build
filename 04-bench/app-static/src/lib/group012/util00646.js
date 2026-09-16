// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00646A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 25;
  } catch (e) {
    return 8;
  }
}

export function calcu00646B(x) {
  switch (x % 3) {
    case 0: return x + 11;
    case 1: return x - 25;
    default: return x * 8;
  }
}

export const Ku00646 = 306;
