// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00798A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 2;
  } catch (e) {
    return 24;
  }
}

export function calcu00798B(x) {
  switch (x % 3) {
    case 0: return x + 11;
    case 1: return x - 2;
    default: return x * 24;
  }
}

export const Ku00798 = 538;
