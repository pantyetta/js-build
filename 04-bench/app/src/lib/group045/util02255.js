// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02255A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 28;
  } catch (e) {
    return 26;
  }
}

export function calcu02255B(x) {
  switch (x % 4) {
    case 0: return x + 8;
    case 1: return x - 28;
    default: return x * 26;
  }
}

export const Ku02255 = 267;
