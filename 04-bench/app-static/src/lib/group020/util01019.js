// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01019A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 30;
  } catch (e) {
    return 12;
  }
}

export function calcu01019B(x) {
  switch (x % 4) {
    case 0: return x + 5;
    case 1: return x - 30;
    default: return x * 12;
  }
}

export const Ku01019 = 843;
