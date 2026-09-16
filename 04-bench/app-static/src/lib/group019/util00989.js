// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00989A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 34;
  } catch (e) {
    return 14;
  }
}

export function calcu00989B(x) {
  switch (x % 4) {
    case 0: return x + 10;
    case 1: return x - 34;
    default: return x * 14;
  }
}

export const Ku00989 = 911;
