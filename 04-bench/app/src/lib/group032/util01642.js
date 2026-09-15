// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01642A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 24;
  } catch (e) {
    return 5;
  }
}

export function calcu01642B(x) {
  switch (x % 3) {
    case 0: return x + 17;
    case 1: return x - 24;
    default: return x * 5;
  }
}

export const Ku01642 = 83;
