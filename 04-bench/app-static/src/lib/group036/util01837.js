// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01837A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 19;
  } catch (e) {
    return 18;
  }
}

export function calcu01837B(x) {
  switch (x % 6) {
    case 0: return x + 15;
    case 1: return x - 19;
    default: return x * 18;
  }
}

export const Ku01837 = 769;
