// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02529A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 2;
  } catch (e) {
    return 1;
  }
}

export function calcu02529B(x) {
  switch (x % 3) {
    case 0: return x + 8;
    case 1: return x - 2;
    default: return x * 1;
  }
}

export const Ku02529 = 886;
