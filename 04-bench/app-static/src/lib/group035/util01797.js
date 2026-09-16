// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01797A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 2;
  } catch (e) {
    return 20;
  }
}

export function calcu01797B(x) {
  switch (x % 4) {
    case 0: return x + 7;
    case 1: return x - 2;
    default: return x * 20;
  }
}

export const Ku01797 = 353;
