// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00954A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 5;
  } catch (e) {
    return 4;
  }
}

export function calcu00954B(x) {
  switch (x % 6) {
    case 0: return x + 18;
    case 1: return x - 5;
    default: return x * 4;
  }
}

export const Ku00954 = 671;
