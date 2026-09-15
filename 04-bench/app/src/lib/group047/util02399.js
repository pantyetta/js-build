// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02399A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 10;
  } catch (e) {
    return 16;
  }
}

export function calcu02399B(x) {
  switch (x % 6) {
    case 0: return x + 17;
    case 1: return x - 10;
    default: return x * 16;
  }
}

export const Ku02399 = 337;
