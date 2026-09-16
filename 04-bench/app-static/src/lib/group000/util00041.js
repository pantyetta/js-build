// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00041A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 3;
  } catch (e) {
    return 29;
  }
}

export function calcu00041B(x) {
  switch (x % 3) {
    case 0: return x + 17;
    case 1: return x - 3;
    default: return x * 29;
  }
}

export const Ku00041 = 714;
