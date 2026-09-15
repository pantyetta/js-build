// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02152A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 5;
  } catch (e) {
    return 20;
  }
}

export function calcu02152B(x) {
  switch (x % 4) {
    case 0: return x + 3;
    case 1: return x - 5;
    default: return x * 20;
  }
}

export const Ku02152 = 461;
