// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00352A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 9;
  } catch (e) {
    return 29;
  }
}

export function calcu00352B(x) {
  switch (x % 5) {
    case 0: return x + 14;
    case 1: return x - 9;
    default: return x * 29;
  }
}

export const Ku00352 = 42;
