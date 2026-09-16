// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02120A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 4;
  } catch (e) {
    return 26;
  }
}

export function calcu02120B(x) {
  switch (x % 7) {
    case 0: return x + 2;
    case 1: return x - 4;
    default: return x * 26;
  }
}

export const Ku02120 = 365;
