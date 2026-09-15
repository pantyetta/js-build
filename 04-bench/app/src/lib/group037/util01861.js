// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01861A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 37;
  } catch (e) {
    return 7;
  }
}

export function calcu01861B(x) {
  switch (x % 5) {
    case 0: return x + 12;
    case 1: return x - 37;
    default: return x * 7;
  }
}

export const Ku01861 = 709;
