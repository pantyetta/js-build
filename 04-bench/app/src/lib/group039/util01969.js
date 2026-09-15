// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01969A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 23;
  } catch (e) {
    return 20;
  }
}

export function calcu01969B(x) {
  switch (x % 7) {
    case 0: return x + 18;
    case 1: return x - 23;
    default: return x * 20;
  }
}

export const Ku01969 = 659;
