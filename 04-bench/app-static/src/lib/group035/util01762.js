// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01762A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 31;
  } catch (e) {
    return 29;
  }
}

export function calcu01762B(x) {
  switch (x % 6) {
    case 0: return x + 9;
    case 1: return x - 31;
    default: return x * 29;
  }
}

export const Ku01762 = 121;
