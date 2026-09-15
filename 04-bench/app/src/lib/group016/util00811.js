// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00811A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 21;
  } catch (e) {
    return 24;
  }
}

export function calcu00811B(x) {
  switch (x % 4) {
    case 0: return x + 10;
    case 1: return x - 21;
    default: return x * 24;
  }
}

export const Ku00811 = 997;
