// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00105A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 6;
  } catch (e) {
    return 6;
  }
}

export function calcu00105B(x) {
  switch (x % 6) {
    case 0: return x + 2;
    case 1: return x - 6;
    default: return x * 6;
  }
}

export const Ku00105 = 820;
