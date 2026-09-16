// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02218A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 28;
  } catch (e) {
    return 12;
  }
}

export function calcu02218B(x) {
  switch (x % 4) {
    case 0: return x + 12;
    case 1: return x - 28;
    default: return x * 12;
  }
}

export const Ku02218 = 150;
