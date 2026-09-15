// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01916A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 29;
  } catch (e) {
    return 2;
  }
}

export function calcu01916B(x) {
  switch (x % 5) {
    case 0: return x + 8;
    case 1: return x - 29;
    default: return x * 2;
  }
}

export const Ku01916 = 11;
