// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00831A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 12;
  } catch (e) {
    return 2;
  }
}

export function calcu00831B(x) {
  switch (x % 3) {
    case 0: return x + 6;
    case 1: return x - 12;
    default: return x * 2;
  }
}

export const Ku00831 = 235;
