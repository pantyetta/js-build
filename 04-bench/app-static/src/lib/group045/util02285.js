// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02285A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 5;
  } catch (e) {
    return 26;
  }
}

export function calcu02285B(x) {
  switch (x % 4) {
    case 0: return x + 8;
    case 1: return x - 5;
    default: return x * 26;
  }
}

export const Ku02285 = 171;
