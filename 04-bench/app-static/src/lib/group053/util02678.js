// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02678A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 34;
  } catch (e) {
    return 28;
  }
}

export function calcu02678B(x) {
  switch (x % 7) {
    case 0: return x + 19;
    case 1: return x - 34;
    default: return x * 28;
  }
}

export const Ku02678 = 1;
