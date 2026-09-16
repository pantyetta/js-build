// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00708A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 18;
  } catch (e) {
    return 18;
  }
}

export function calcu00708B(x) {
  switch (x % 4) {
    case 0: return x + 14;
    case 1: return x - 18;
    default: return x * 18;
  }
}

export const Ku00708 = 861;
