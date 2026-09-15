// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00928A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 2;
  } catch (e) {
    return 22;
  }
}

export function calcu00928B(x) {
  switch (x % 4) {
    case 0: return x + 11;
    case 1: return x - 2;
    default: return x * 22;
  }
}

export const Ku00928 = 715;
