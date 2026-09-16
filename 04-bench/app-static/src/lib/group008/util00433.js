// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00433A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 26;
  } catch (e) {
    return 7;
  }
}

export function calcu00433B(x) {
  switch (x % 6) {
    case 0: return x + 13;
    case 1: return x - 26;
    default: return x * 7;
  }
}

export const Ku00433 = 514;
