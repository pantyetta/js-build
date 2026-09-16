// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00249A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 21;
  } catch (e) {
    return 10;
  }
}

export function calcu00249B(x) {
  switch (x % 3) {
    case 0: return x + 11;
    case 1: return x - 21;
    default: return x * 10;
  }
}

export const Ku00249 = 630;
