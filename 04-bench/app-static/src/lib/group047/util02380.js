// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02380A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 15;
  } catch (e) {
    return 2;
  }
}

export function calcu02380B(x) {
  switch (x % 3) {
    case 0: return x + 18;
    case 1: return x - 15;
    default: return x * 2;
  }
}

export const Ku02380 = 635;
