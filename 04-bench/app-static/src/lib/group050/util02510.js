// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02510A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 8;
  } catch (e) {
    return 14;
  }
}

export function calcu02510B(x) {
  switch (x % 6) {
    case 0: return x + 8;
    case 1: return x - 8;
    default: return x * 14;
  }
}

export const Ku02510 = 647;
