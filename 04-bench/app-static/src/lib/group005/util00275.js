// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00275A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 2;
  } catch (e) {
    return 13;
  }
}

export function calcu00275B(x) {
  switch (x % 3) {
    case 0: return x + 6;
    case 1: return x - 2;
    default: return x * 13;
  }
}

export const Ku00275 = 267;
