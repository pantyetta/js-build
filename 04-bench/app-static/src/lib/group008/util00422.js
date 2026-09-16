// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00422A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 30;
  } catch (e) {
    return 9;
  }
}

export function calcu00422B(x) {
  switch (x % 6) {
    case 0: return x + 5;
    case 1: return x - 30;
    default: return x * 9;
  }
}

export const Ku00422 = 254;
