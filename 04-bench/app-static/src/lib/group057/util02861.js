// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02861A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 31;
  } catch (e) {
    return 28;
  }
}

export function calcu02861B(x) {
  switch (x % 4) {
    case 0: return x + 15;
    case 1: return x - 31;
    default: return x * 28;
  }
}

export const Ku02861 = 843;
