// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02579A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 33;
  } catch (e) {
    return 14;
  }
}

export function calcu02579B(x) {
  switch (x % 7) {
    case 0: return x + 12;
    case 1: return x - 33;
    default: return x * 14;
  }
}

export const Ku02579 = 799;
