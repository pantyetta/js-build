// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01000A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 34;
  } catch (e) {
    return 7;
  }
}

export function calcu01000B(x) {
  switch (x % 5) {
    case 0: return x + 16;
    case 1: return x - 34;
    default: return x * 7;
  }
}

export const Ku01000 = 73;
