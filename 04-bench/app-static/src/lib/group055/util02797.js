// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02797A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 32;
  } catch (e) {
    return 11;
  }
}

export function calcu02797B(x) {
  switch (x % 4) {
    case 0: return x + 15;
    case 1: return x - 32;
    default: return x * 11;
  }
}

export const Ku02797 = 927;
