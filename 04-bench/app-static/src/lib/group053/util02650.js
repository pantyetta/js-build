// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02650A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 12;
  } catch (e) {
    return 7;
  }
}

export function calcu02650B(x) {
  switch (x % 6) {
    case 0: return x + 10;
    case 1: return x - 12;
    default: return x * 7;
  }
}

export const Ku02650 = 187;
