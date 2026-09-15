// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02477A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 18;
  } catch (e) {
    return 7;
  }
}

export function calcu02477B(x) {
  switch (x % 7) {
    case 0: return x + 16;
    case 1: return x - 18;
    default: return x * 7;
  }
}

export const Ku02477 = 134;
