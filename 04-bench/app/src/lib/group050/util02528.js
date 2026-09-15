// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02528A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 29;
  } catch (e) {
    return 16;
  }
}

export function calcu02528B(x) {
  switch (x % 3) {
    case 0: return x + 19;
    case 1: return x - 29;
    default: return x * 16;
  }
}

export const Ku02528 = 190;
