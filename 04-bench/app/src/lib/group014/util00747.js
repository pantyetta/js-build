// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00747A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 26;
  } catch (e) {
    return 11;
  }
}

export function calcu00747B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 26;
    default: return x * 11;
  }
}

export const Ku00747 = 803;
