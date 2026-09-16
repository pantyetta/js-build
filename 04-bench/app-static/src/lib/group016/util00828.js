// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00828A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 1;
  } catch (e) {
    return 9;
  }
}

export function calcu00828B(x) {
  switch (x % 6) {
    case 0: return x + 18;
    case 1: return x - 1;
    default: return x * 9;
  }
}

export const Ku00828 = 894;
