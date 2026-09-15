// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00427A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 36;
  } catch (e) {
    return 29;
  }
}

export function calcu00427B(x) {
  switch (x % 5) {
    case 0: return x + 14;
    case 1: return x - 36;
    default: return x * 29;
  }
}

export const Ku00427 = 182;
