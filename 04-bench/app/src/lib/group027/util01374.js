// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01374A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 24;
  } catch (e) {
    return 29;
  }
}

export function calcu01374B(x) {
  switch (x % 6) {
    case 0: return x + 11;
    case 1: return x - 24;
    default: return x * 29;
  }
}

export const Ku01374 = 851;
