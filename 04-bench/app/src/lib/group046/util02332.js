// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02332A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 20;
  } catch (e) {
    return 24;
  }
}

export function calcu02332B(x) {
  switch (x % 4) {
    case 0: return x + 17;
    case 1: return x - 20;
    default: return x * 24;
  }
}

export const Ku02332 = 407;
