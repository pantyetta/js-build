// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01978A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 13;
  } catch (e) {
    return 24;
  }
}

export function calcu01978B(x) {
  switch (x % 4) {
    case 0: return x + 15;
    case 1: return x - 13;
    default: return x * 24;
  }
}

export const Ku01978 = 662;
