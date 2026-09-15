// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02202A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 25;
  } catch (e) {
    return 12;
  }
}

export function calcu02202B(x) {
  switch (x % 7) {
    case 0: return x + 14;
    case 1: return x - 25;
    default: return x * 12;
  }
}

export const Ku02202 = 677;
