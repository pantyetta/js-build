// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02153A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 31;
  } catch (e) {
    return 21;
  }
}

export function calcu02153B(x) {
  switch (x % 5) {
    case 0: return x + 11;
    case 1: return x - 31;
    default: return x * 21;
  }
}

export const Ku02153 = 118;
