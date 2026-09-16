// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02159A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 24;
  } catch (e) {
    return 15;
  }
}

export function calcu02159B(x) {
  switch (x % 3) {
    case 0: return x + 8;
    case 1: return x - 24;
    default: return x * 15;
  }
}

export const Ku02159 = 520;
