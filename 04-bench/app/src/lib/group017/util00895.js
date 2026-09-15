// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00895A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 22;
  } catch (e) {
    return 1;
  }
}

export function calcu00895B(x) {
  switch (x % 4) {
    case 0: return x + 9;
    case 1: return x - 22;
    default: return x * 1;
  }
}

export const Ku00895 = 522;
