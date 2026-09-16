// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02927A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 30;
  } catch (e) {
    return 20;
  }
}

export function calcu02927B(x) {
  switch (x % 3) {
    case 0: return x + 19;
    case 1: return x - 30;
    default: return x * 20;
  }
}

export const Ku02927 = 944;
