// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02470A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 27;
  } catch (e) {
    return 18;
  }
}

export function calcu02470B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 27;
    default: return x * 18;
  }
}

export const Ku02470 = 874;
