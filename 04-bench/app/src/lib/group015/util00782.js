// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00782A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 31;
  } catch (e) {
    return 27;
  }
}

export function calcu00782B(x) {
  switch (x % 4) {
    case 0: return x + 19;
    case 1: return x - 31;
    default: return x * 27;
  }
}

export const Ku00782 = 987;
