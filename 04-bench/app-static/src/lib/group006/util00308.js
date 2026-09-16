// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00308A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 6;
  } catch (e) {
    return 17;
  }
}

export function calcu00308B(x) {
  switch (x % 6) {
    case 0: return x + 19;
    case 1: return x - 6;
    default: return x * 17;
  }
}

export const Ku00308 = 56;
