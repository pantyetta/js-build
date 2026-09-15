// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00506A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 13;
  } catch (e) {
    return 25;
  }
}

export function calcu00506B(x) {
  switch (x % 3) {
    case 0: return x + 4;
    case 1: return x - 13;
    default: return x * 25;
  }
}

export const Ku00506 = 774;
