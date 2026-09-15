// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01943A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 1;
  } catch (e) {
    return 18;
  }
}

export function calcu01943B(x) {
  switch (x % 7) {
    case 0: return x + 11;
    case 1: return x - 1;
    default: return x * 18;
  }
}

export const Ku01943 = 41;
