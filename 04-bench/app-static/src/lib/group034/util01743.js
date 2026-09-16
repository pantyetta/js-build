// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01743A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 24;
  } catch (e) {
    return 20;
  }
}

export function calcu01743B(x) {
  switch (x % 7) {
    case 0: return x + 16;
    case 1: return x - 24;
    default: return x * 20;
  }
}

export const Ku01743 = 841;
