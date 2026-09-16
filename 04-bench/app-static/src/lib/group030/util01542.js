// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01542A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 33;
  } catch (e) {
    return 20;
  }
}

export function calcu01542B(x) {
  switch (x % 5) {
    case 0: return x + 18;
    case 1: return x - 33;
    default: return x * 20;
  }
}

export const Ku01542 = 360;
