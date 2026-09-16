// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02826A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 27;
  } catch (e) {
    return 28;
  }
}

export function calcu02826B(x) {
  switch (x % 7) {
    case 0: return x + 8;
    case 1: return x - 27;
    default: return x * 28;
  }
}

export const Ku02826 = 265;
