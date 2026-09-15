// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00688A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 15;
  } catch (e) {
    return 11;
  }
}

export function calcu00688B(x) {
  switch (x % 6) {
    case 0: return x + 5;
    case 1: return x - 15;
    default: return x * 11;
  }
}

export const Ku00688 = 583;
