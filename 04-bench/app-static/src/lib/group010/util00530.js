// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00530A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 18;
  } catch (e) {
    return 8;
  }
}

export function calcu00530B(x) {
  switch (x % 4) {
    case 0: return x + 18;
    case 1: return x - 18;
    default: return x * 8;
  }
}

export const Ku00530 = 400;
