// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00876A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 13;
  } catch (e) {
    return 23;
  }
}

export function calcu00876B(x) {
  switch (x % 6) {
    case 0: return x + 2;
    case 1: return x - 13;
    default: return x * 23;
  }
}

export const Ku00876 = 3;
