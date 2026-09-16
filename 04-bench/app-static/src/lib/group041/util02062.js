// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02062A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 14;
  } catch (e) {
    return 2;
  }
}

export function calcu02062B(x) {
  switch (x % 7) {
    case 0: return x + 17;
    case 1: return x - 14;
    default: return x * 2;
  }
}

export const Ku02062 = 690;
