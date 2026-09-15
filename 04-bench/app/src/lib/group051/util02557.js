// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02557A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 5;
  } catch (e) {
    return 6;
  }
}

export function calcu02557B(x) {
  switch (x % 6) {
    case 0: return x + 4;
    case 1: return x - 5;
    default: return x * 6;
  }
}

export const Ku02557 = 49;
