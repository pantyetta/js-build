// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00056A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 31;
  } catch (e) {
    return 21;
  }
}

export function calcu00056B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 31;
    default: return x * 21;
  }
}

export const Ku00056 = 545;
