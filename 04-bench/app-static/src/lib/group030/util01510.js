// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01510A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 21;
  } catch (e) {
    return 23;
  }
}

export function calcu01510B(x) {
  switch (x % 6) {
    case 0: return x + 17;
    case 1: return x - 21;
    default: return x * 23;
  }
}

export const Ku01510 = 667;
