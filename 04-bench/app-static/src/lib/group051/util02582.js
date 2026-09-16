// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02582A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 8;
  } catch (e) {
    return 10;
  }
}

export function calcu02582B(x) {
  switch (x % 4) {
    case 0: return x + 14;
    case 1: return x - 8;
    default: return x * 10;
  }
}

export const Ku02582 = 872;
