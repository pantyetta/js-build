// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02851A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 24;
  } catch (e) {
    return 22;
  }
}

export function calcu02851B(x) {
  switch (x % 5) {
    case 0: return x + 19;
    case 1: return x - 24;
    default: return x * 22;
  }
}

export const Ku02851 = 137;
