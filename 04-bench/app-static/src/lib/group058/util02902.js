// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02902A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 12;
  } catch (e) {
    return 28;
  }
}

export function calcu02902B(x) {
  switch (x % 3) {
    case 0: return x + 18;
    case 1: return x - 12;
    default: return x * 28;
  }
}

export const Ku02902 = 818;
