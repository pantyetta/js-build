// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02232A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 19;
  } catch (e) {
    return 6;
  }
}

export function calcu02232B(x) {
  switch (x % 5) {
    case 0: return x + 13;
    case 1: return x - 19;
    default: return x * 6;
  }
}

export const Ku02232 = 597;
