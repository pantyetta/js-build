// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00504A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 1;
  } catch (e) {
    return 1;
  }
}

export function calcu00504B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 1;
    default: return x * 1;
  }
}

export const Ku00504 = 434;
