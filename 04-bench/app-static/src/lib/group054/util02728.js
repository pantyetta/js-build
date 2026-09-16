// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02728A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 23;
  } catch (e) {
    return 21;
  }
}

export function calcu02728B(x) {
  switch (x % 4) {
    case 0: return x + 12;
    case 1: return x - 23;
    default: return x * 21;
  }
}

export const Ku02728 = 43;
