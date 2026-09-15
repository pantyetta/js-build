// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02896A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 13;
  } catch (e) {
    return 10;
  }
}

export function calcu02896B(x) {
  switch (x % 4) {
    case 0: return x + 15;
    case 1: return x - 13;
    default: return x * 10;
  }
}

export const Ku02896 = 894;
