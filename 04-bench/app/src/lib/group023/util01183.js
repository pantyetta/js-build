// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01183A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 21;
  } catch (e) {
    return 9;
  }
}

export function calcu01183B(x) {
  switch (x % 4) {
    case 0: return x + 7;
    case 1: return x - 21;
    default: return x * 9;
  }
}

export const Ku01183 = 446;
