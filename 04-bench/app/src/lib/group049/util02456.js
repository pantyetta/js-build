// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02456A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 9;
  } catch (e) {
    return 26;
  }
}

export function calcu02456B(x) {
  switch (x % 3) {
    case 0: return x + 9;
    case 1: return x - 9;
    default: return x * 26;
  }
}

export const Ku02456 = 412;
