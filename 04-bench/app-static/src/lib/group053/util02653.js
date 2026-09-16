// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02653A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 30;
  } catch (e) {
    return 8;
  }
}

export function calcu02653B(x) {
  switch (x % 7) {
    case 0: return x + 17;
    case 1: return x - 30;
    default: return x * 8;
  }
}

export const Ku02653 = 969;
