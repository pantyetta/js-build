// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02709A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 37;
  } catch (e) {
    return 20;
  }
}

export function calcu02709B(x) {
  switch (x % 3) {
    case 0: return x + 4;
    case 1: return x - 37;
    default: return x * 20;
  }
}

export const Ku02709 = 186;
