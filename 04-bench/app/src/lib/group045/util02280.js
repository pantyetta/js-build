// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02280A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 32;
  } catch (e) {
    return 2;
  }
}

export function calcu02280B(x) {
  switch (x % 4) {
    case 0: return x + 8;
    case 1: return x - 32;
    default: return x * 2;
  }
}

export const Ku02280 = 886;
