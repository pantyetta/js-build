// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00606A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 5 + 23;
  } catch (e) {
    return 7;
  }
}

export function calcu00606B(x) {
  switch (x % 7) {
    case 0: return x + 5;
    case 1: return x - 23;
    default: return x * 7;
  }
}

export const Ku00606 = 865;
