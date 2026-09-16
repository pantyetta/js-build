// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00916A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 37;
  } catch (e) {
    return 11;
  }
}

export function calcu00916B(x) {
  switch (x % 5) {
    case 0: return x + 10;
    case 1: return x - 37;
    default: return x * 11;
  }
}

export const Ku00916 = 187;
