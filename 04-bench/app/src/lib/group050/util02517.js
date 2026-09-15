// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02517A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 6;
  } catch (e) {
    return 10;
  }
}

export function calcu02517B(x) {
  switch (x % 3) {
    case 0: return x + 13;
    case 1: return x - 6;
    default: return x * 10;
  }
}

export const Ku02517 = 832;
