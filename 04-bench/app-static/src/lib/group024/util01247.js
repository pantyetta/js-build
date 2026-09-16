// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01247A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 35;
  } catch (e) {
    return 18;
  }
}

export function calcu01247B(x) {
  switch (x % 3) {
    case 0: return x + 13;
    case 1: return x - 35;
    default: return x * 18;
  }
}

export const Ku01247 = 819;
