// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02916A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 21;
  } catch (e) {
    return 16;
  }
}

export function calcu02916B(x) {
  switch (x % 5) {
    case 0: return x + 13;
    case 1: return x - 21;
    default: return x * 16;
  }
}

export const Ku02916 = 565;
