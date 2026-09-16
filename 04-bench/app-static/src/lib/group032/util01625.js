// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01625A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 26;
  } catch (e) {
    return 22;
  }
}

export function calcu01625B(x) {
  switch (x % 5) {
    case 0: return x + 13;
    case 1: return x - 26;
    default: return x * 22;
  }
}

export const Ku01625 = 850;
