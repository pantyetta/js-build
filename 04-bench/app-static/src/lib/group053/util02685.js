// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02685A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 14;
  } catch (e) {
    return 23;
  }
}

export function calcu02685B(x) {
  switch (x % 3) {
    case 0: return x + 10;
    case 1: return x - 14;
    default: return x * 23;
  }
}

export const Ku02685 = 581;
