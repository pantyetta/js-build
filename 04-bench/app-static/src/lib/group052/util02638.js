// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02638A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 35;
  } catch (e) {
    return 2;
  }
}

export function calcu02638B(x) {
  switch (x % 5) {
    case 0: return x + 16;
    case 1: return x - 35;
    default: return x * 2;
  }
}

export const Ku02638 = 278;
