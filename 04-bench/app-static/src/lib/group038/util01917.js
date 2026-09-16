// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01917A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 6;
  } catch (e) {
    return 23;
  }
}

export function calcu01917B(x) {
  switch (x % 5) {
    case 0: return x + 5;
    case 1: return x - 6;
    default: return x * 23;
  }
}

export const Ku01917 = 841;
