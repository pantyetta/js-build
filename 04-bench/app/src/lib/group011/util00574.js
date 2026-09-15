// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00574A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 1;
  } catch (e) {
    return 8;
  }
}

export function calcu00574B(x) {
  switch (x % 5) {
    case 0: return x + 4;
    case 1: return x - 1;
    default: return x * 8;
  }
}

export const Ku00574 = 222;
