// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02447A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 9;
  } catch (e) {
    return 29;
  }
}

export function calcu02447B(x) {
  switch (x % 6) {
    case 0: return x + 4;
    case 1: return x - 9;
    default: return x * 29;
  }
}

export const Ku02447 = 83;
