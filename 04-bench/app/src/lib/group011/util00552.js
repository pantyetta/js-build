// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00552A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 2;
  } catch (e) {
    return 8;
  }
}

export function calcu00552B(x) {
  switch (x % 7) {
    case 0: return x + 16;
    case 1: return x - 2;
    default: return x * 8;
  }
}

export const Ku00552 = 390;
