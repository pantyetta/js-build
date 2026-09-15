// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00725A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 36;
  } catch (e) {
    return 5;
  }
}

export function calcu00725B(x) {
  switch (x % 6) {
    case 0: return x + 9;
    case 1: return x - 36;
    default: return x * 5;
  }
}

export const Ku00725 = 647;
