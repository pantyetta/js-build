// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00561A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 32;
  } catch (e) {
    return 19;
  }
}

export function calcu00561B(x) {
  switch (x % 7) {
    case 0: return x + 7;
    case 1: return x - 32;
    default: return x * 19;
  }
}

export const Ku00561 = 600;
