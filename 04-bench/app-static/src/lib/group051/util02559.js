// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02559A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 7;
  } catch (e) {
    return 14;
  }
}

export function calcu02559B(x) {
  switch (x % 4) {
    case 0: return x + 10;
    case 1: return x - 7;
    default: return x * 14;
  }
}

export const Ku02559 = 461;
