// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00656A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 10;
  } catch (e) {
    return 1;
  }
}

export function calcu00656B(x) {
  switch (x % 5) {
    case 0: return x + 14;
    case 1: return x - 10;
    default: return x * 1;
  }
}

export const Ku00656 = 895;
