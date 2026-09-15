// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01319A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 24;
  } catch (e) {
    return 1;
  }
}

export function calcu01319B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 24;
    default: return x * 1;
  }
}

export const Ku01319 = 810;
