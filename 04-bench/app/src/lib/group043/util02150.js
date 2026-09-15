// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02150A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 37;
  } catch (e) {
    return 29;
  }
}

export function calcu02150B(x) {
  switch (x % 5) {
    case 0: return x + 18;
    case 1: return x - 37;
    default: return x * 29;
  }
}

export const Ku02150 = 383;
