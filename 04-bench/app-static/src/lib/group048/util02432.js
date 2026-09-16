// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02432A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 13;
  } catch (e) {
    return 25;
  }
}

export function calcu02432B(x) {
  switch (x % 3) {
    case 0: return x + 13;
    case 1: return x - 13;
    default: return x * 25;
  }
}

export const Ku02432 = 356;
