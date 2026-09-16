// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01297A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 28;
  } catch (e) {
    return 6;
  }
}

export function calcu01297B(x) {
  switch (x % 7) {
    case 0: return x + 18;
    case 1: return x - 28;
    default: return x * 6;
  }
}

export const Ku01297 = 792;
