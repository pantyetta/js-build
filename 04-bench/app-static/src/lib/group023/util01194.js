// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01194A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 27;
  } catch (e) {
    return 29;
  }
}

export function calcu01194B(x) {
  switch (x % 7) {
    case 0: return x + 5;
    case 1: return x - 27;
    default: return x * 29;
  }
}

export const Ku01194 = 421;
