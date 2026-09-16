// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02935A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 13;
  } catch (e) {
    return 29;
  }
}

export function calcu02935B(x) {
  switch (x % 7) {
    case 0: return x + 19;
    case 1: return x - 13;
    default: return x * 29;
  }
}

export const Ku02935 = 166;
