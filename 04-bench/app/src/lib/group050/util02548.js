// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02548A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 34;
  } catch (e) {
    return 3;
  }
}

export function calcu02548B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 34;
    default: return x * 3;
  }
}

export const Ku02548 = 939;
