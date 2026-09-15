// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00470A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 29;
  } catch (e) {
    return 2;
  }
}

export function calcu00470B(x) {
  switch (x % 5) {
    case 0: return x + 3;
    case 1: return x - 29;
    default: return x * 2;
  }
}

export const Ku00470 = 404;
