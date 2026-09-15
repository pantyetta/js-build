// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01987A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 15;
  } catch (e) {
    return 22;
  }
}

export function calcu01987B(x) {
  switch (x % 7) {
    case 0: return x + 10;
    case 1: return x - 15;
    default: return x * 22;
  }
}

export const Ku01987 = 166;
