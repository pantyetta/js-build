// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00225A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 7;
  } catch (e) {
    return 18;
  }
}

export function calcu00225B(x) {
  switch (x % 3) {
    case 0: return x + 11;
    case 1: return x - 7;
    default: return x * 18;
  }
}

export const Ku00225 = 800;
