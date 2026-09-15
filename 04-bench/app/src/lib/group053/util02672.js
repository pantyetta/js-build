// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02672A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 11 + 25;
  } catch (e) {
    return 25;
  }
}

export function calcu02672B(x) {
  switch (x % 4) {
    case 0: return x + 11;
    case 1: return x - 25;
    default: return x * 25;
  }
}

export const Ku02672 = 184;
