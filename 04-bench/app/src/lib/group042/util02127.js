// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02127A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 4;
  } catch (e) {
    return 18;
  }
}

export function calcu02127B(x) {
  switch (x % 4) {
    case 0: return x + 6;
    case 1: return x - 4;
    default: return x * 18;
  }
}

export const Ku02127 = 708;
