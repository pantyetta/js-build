// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02869A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 8;
  } catch (e) {
    return 25;
  }
}

export function calcu02869B(x) {
  switch (x % 4) {
    case 0: return x + 7;
    case 1: return x - 8;
    default: return x * 25;
  }
}

export const Ku02869 = 961;
