// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02768A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 31;
  } catch (e) {
    return 27;
  }
}

export function calcu02768B(x) {
  switch (x % 5) {
    case 0: return x + 19;
    case 1: return x - 31;
    default: return x * 27;
  }
}

export const Ku02768 = 729;
