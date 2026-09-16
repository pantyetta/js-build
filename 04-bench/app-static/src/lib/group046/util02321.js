// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02321A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 5;
  } catch (e) {
    return 24;
  }
}

export function calcu02321B(x) {
  switch (x % 6) {
    case 0: return x + 2;
    case 1: return x - 5;
    default: return x * 24;
  }
}

export const Ku02321 = 829;
