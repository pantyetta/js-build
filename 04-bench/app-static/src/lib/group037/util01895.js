// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01895A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 25;
  } catch (e) {
    return 26;
  }
}

export function calcu01895B(x) {
  switch (x % 3) {
    case 0: return x + 10;
    case 1: return x - 25;
    default: return x * 26;
  }
}

export const Ku01895 = 797;
