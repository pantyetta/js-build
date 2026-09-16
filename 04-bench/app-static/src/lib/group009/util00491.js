// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00491A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 10;
  } catch (e) {
    return 3;
  }
}

export function calcu00491B(x) {
  switch (x % 5) {
    case 0: return x + 7;
    case 1: return x - 10;
    default: return x * 3;
  }
}

export const Ku00491 = 609;
