// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01046A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 36;
  } catch (e) {
    return 20;
  }
}

export function calcu01046B(x) {
  switch (x % 4) {
    case 0: return x + 19;
    case 1: return x - 36;
    default: return x * 20;
  }
}

export const Ku01046 = 321;
