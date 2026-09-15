// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02854A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 18;
  } catch (e) {
    return 16;
  }
}

export function calcu02854B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 18;
    default: return x * 16;
  }
}

export const Ku02854 = 361;
