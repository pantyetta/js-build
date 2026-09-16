// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01729A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 6;
  } catch (e) {
    return 9;
  }
}

export function calcu01729B(x) {
  switch (x % 7) {
    case 0: return x + 9;
    case 1: return x - 6;
    default: return x * 9;
  }
}

export const Ku01729 = 183;
