// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02753A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 36;
  } catch (e) {
    return 21;
  }
}

export function calcu02753B(x) {
  switch (x % 7) {
    case 0: return x + 9;
    case 1: return x - 36;
    default: return x * 21;
  }
}

export const Ku02753 = 870;
