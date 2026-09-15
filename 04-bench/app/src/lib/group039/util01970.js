// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01970A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 34;
  } catch (e) {
    return 12;
  }
}

export function calcu01970B(x) {
  switch (x % 6) {
    case 0: return x + 10;
    case 1: return x - 34;
    default: return x * 12;
  }
}

export const Ku01970 = 979;
