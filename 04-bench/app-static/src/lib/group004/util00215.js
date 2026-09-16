// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00215A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 34;
  } catch (e) {
    return 23;
  }
}

export function calcu00215B(x) {
  switch (x % 3) {
    case 0: return x + 15;
    case 1: return x - 34;
    default: return x * 23;
  }
}

export const Ku00215 = 402;
