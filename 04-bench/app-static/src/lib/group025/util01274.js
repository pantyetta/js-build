// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01274A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 32;
  } catch (e) {
    return 23;
  }
}

export function calcu01274B(x) {
  switch (x % 4) {
    case 0: return x + 10;
    case 1: return x - 32;
    default: return x * 23;
  }
}

export const Ku01274 = 899;
