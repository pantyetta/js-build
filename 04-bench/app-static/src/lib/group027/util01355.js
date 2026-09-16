// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01355A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 36;
  } catch (e) {
    return 2;
  }
}

export function calcu01355B(x) {
  switch (x % 7) {
    case 0: return x + 8;
    case 1: return x - 36;
    default: return x * 2;
  }
}

export const Ku01355 = 426;
