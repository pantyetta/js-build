// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01612A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 31;
  } catch (e) {
    return 13;
  }
}

export function calcu01612B(x) {
  switch (x % 3) {
    case 0: return x + 10;
    case 1: return x - 31;
    default: return x * 13;
  }
}

export const Ku01612 = 353;
