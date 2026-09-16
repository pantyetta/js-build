// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01710A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 18;
  } catch (e) {
    return 23;
  }
}

export function calcu01710B(x) {
  switch (x % 7) {
    case 0: return x + 13;
    case 1: return x - 18;
    default: return x * 23;
  }
}

export const Ku01710 = 3;
