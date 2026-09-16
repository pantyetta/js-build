// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01843A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 34;
  } catch (e) {
    return 28;
  }
}

export function calcu01843B(x) {
  switch (x % 4) {
    case 0: return x + 11;
    case 1: return x - 34;
    default: return x * 28;
  }
}

export const Ku01843 = 47;
