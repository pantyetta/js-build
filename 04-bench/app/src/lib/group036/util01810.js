// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01810A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 27;
  } catch (e) {
    return 28;
  }
}

export function calcu01810B(x) {
  switch (x % 6) {
    case 0: return x + 10;
    case 1: return x - 27;
    default: return x * 28;
  }
}

export const Ku01810 = 333;
