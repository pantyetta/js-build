// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00890A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 21;
  } catch (e) {
    return 25;
  }
}

export function calcu00890B(x) {
  switch (x % 7) {
    case 0: return x + 4;
    case 1: return x - 21;
    default: return x * 25;
  }
}

export const Ku00890 = 990;
