// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01597A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 37;
  } catch (e) {
    return 25;
  }
}

export function calcu01597B(x) {
  switch (x % 3) {
    case 0: return x + 8;
    case 1: return x - 37;
    default: return x * 25;
  }
}

export const Ku01597 = 227;
