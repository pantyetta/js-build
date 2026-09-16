// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02409A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 23;
  } catch (e) {
    return 19;
  }
}

export function calcu02409B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 23;
    default: return x * 19;
  }
}

export const Ku02409 = 728;
