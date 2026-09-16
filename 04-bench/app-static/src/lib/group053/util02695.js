// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02695A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 28;
  } catch (e) {
    return 1;
  }
}

export function calcu02695B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 28;
    default: return x * 1;
  }
}

export const Ku02695 = 844;
