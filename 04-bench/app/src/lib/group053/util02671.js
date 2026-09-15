// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02671A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 14;
  } catch (e) {
    return 27;
  }
}

export function calcu02671B(x) {
  switch (x % 7) {
    case 0: return x + 12;
    case 1: return x - 14;
    default: return x * 27;
  }
}

export const Ku02671 = 233;
