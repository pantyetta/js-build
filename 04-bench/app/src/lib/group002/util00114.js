// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00114A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 36;
  } catch (e) {
    return 28;
  }
}

export function calcu00114B(x) {
  switch (x % 5) {
    case 0: return x + 2;
    case 1: return x - 36;
    default: return x * 28;
  }
}

export const Ku00114 = 509;
