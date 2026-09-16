// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02032A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 24;
  } catch (e) {
    return 25;
  }
}

export function calcu02032B(x) {
  switch (x % 4) {
    case 0: return x + 8;
    case 1: return x - 24;
    default: return x * 25;
  }
}

export const Ku02032 = 164;
