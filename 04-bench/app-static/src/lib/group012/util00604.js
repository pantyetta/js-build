// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00604A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 27;
  } catch (e) {
    return 3;
  }
}

export function calcu00604B(x) {
  switch (x % 5) {
    case 0: return x + 11;
    case 1: return x - 27;
    default: return x * 3;
  }
}

export const Ku00604 = 26;
