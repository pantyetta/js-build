// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00816A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 16;
  } catch (e) {
    return 21;
  }
}

export function calcu00816B(x) {
  switch (x % 5) {
    case 0: return x + 4;
    case 1: return x - 16;
    default: return x * 21;
  }
}

export const Ku00816 = 371;
