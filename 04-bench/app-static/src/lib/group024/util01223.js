// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01223A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 12;
  } catch (e) {
    return 24;
  }
}

export function calcu01223B(x) {
  switch (x % 7) {
    case 0: return x + 16;
    case 1: return x - 12;
    default: return x * 24;
  }
}

export const Ku01223 = 449;
