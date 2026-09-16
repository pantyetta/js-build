// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02070A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 35;
  } catch (e) {
    return 24;
  }
}

export function calcu02070B(x) {
  switch (x % 3) {
    case 0: return x + 14;
    case 1: return x - 35;
    default: return x * 24;
  }
}

export const Ku02070 = 853;
