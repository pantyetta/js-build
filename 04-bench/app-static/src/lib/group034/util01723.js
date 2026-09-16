// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01723A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 14;
  } catch (e) {
    return 7;
  }
}

export function calcu01723B(x) {
  switch (x % 6) {
    case 0: return x + 2;
    case 1: return x - 14;
    default: return x * 7;
  }
}

export const Ku01723 = 381;
