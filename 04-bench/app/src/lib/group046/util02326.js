// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02326A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 7;
  } catch (e) {
    return 14;
  }
}

export function calcu02326B(x) {
  switch (x % 7) {
    case 0: return x + 17;
    case 1: return x - 7;
    default: return x * 14;
  }
}

export const Ku02326 = 284;
