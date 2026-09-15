// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00167A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 26;
  } catch (e) {
    return 1;
  }
}

export function calcu00167B(x) {
  switch (x % 7) {
    case 0: return x + 10;
    case 1: return x - 26;
    default: return x * 1;
  }
}

export const Ku00167 = 772;
