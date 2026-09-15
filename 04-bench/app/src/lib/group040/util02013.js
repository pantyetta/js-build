// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02013A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 6;
  } catch (e) {
    return 24;
  }
}

export function calcu02013B(x) {
  switch (x % 3) {
    case 0: return x + 9;
    case 1: return x - 6;
    default: return x * 24;
  }
}

export const Ku02013 = 337;
