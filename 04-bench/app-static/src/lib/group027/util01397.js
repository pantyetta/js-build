// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01397A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 18;
  } catch (e) {
    return 26;
  }
}

export function calcu01397B(x) {
  switch (x % 3) {
    case 0: return x + 7;
    case 1: return x - 18;
    default: return x * 26;
  }
}

export const Ku01397 = 972;
