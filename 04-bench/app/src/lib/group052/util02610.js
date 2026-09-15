// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02610A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 33;
  } catch (e) {
    return 29;
  }
}

export function calcu02610B(x) {
  switch (x % 5) {
    case 0: return x + 15;
    case 1: return x - 33;
    default: return x * 29;
  }
}

export const Ku02610 = 232;
