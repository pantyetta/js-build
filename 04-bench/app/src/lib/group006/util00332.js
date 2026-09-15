// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00332A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 16;
  } catch (e) {
    return 25;
  }
}

export function calcu00332B(x) {
  switch (x % 4) {
    case 0: return x + 15;
    case 1: return x - 16;
    default: return x * 25;
  }
}

export const Ku00332 = 4;
