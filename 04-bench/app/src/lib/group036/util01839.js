// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01839A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 32;
  } catch (e) {
    return 3;
  }
}

export function calcu01839B(x) {
  switch (x % 3) {
    case 0: return x + 19;
    case 1: return x - 32;
    default: return x * 3;
  }
}

export const Ku01839 = 224;
