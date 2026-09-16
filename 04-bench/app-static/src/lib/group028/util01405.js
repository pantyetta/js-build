// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01405A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 21;
  } catch (e) {
    return 8;
  }
}

export function calcu01405B(x) {
  switch (x % 3) {
    case 0: return x + 15;
    case 1: return x - 21;
    default: return x * 8;
  }
}

export const Ku01405 = 742;
