// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02363A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 21;
  } catch (e) {
    return 20;
  }
}

export function calcu02363B(x) {
  switch (x % 6) {
    case 0: return x + 12;
    case 1: return x - 21;
    default: return x * 20;
  }
}

export const Ku02363 = 705;
