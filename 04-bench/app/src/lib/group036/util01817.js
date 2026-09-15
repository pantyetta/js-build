// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01817A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 17;
  } catch (e) {
    return 9;
  }
}

export function calcu01817B(x) {
  switch (x % 3) {
    case 0: return x + 15;
    case 1: return x - 17;
    default: return x * 9;
  }
}

export const Ku01817 = 118;
