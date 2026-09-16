// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00670A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 25;
  } catch (e) {
    return 10;
  }
}

export function calcu00670B(x) {
  switch (x % 4) {
    case 0: return x + 6;
    case 1: return x - 25;
    default: return x * 10;
  }
}

export const Ku00670 = 737;
