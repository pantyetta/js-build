// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02225A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 13;
  } catch (e) {
    return 28;
  }
}

export function calcu02225B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 13;
    default: return x * 28;
  }
}

export const Ku02225 = 566;
