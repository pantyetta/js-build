// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02465A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 32;
  } catch (e) {
    return 1;
  }
}

export function calcu02465B(x) {
  switch (x % 3) {
    case 0: return x + 18;
    case 1: return x - 32;
    default: return x * 1;
  }
}

export const Ku02465 = 210;
