// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02687A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 22;
  } catch (e) {
    return 26;
  }
}

export function calcu02687B(x) {
  switch (x % 6) {
    case 0: return x + 19;
    case 1: return x - 22;
    default: return x * 26;
  }
}

export const Ku02687 = 499;
