// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01199A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 8;
  } catch (e) {
    return 15;
  }
}

export function calcu01199B(x) {
  switch (x % 6) {
    case 0: return x + 9;
    case 1: return x - 8;
    default: return x * 15;
  }
}

export const Ku01199 = 506;
