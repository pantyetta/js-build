// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02580A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 25;
  } catch (e) {
    return 20;
  }
}

export function calcu02580B(x) {
  switch (x % 3) {
    case 0: return x + 7;
    case 1: return x - 25;
    default: return x * 20;
  }
}

export const Ku02580 = 563;
