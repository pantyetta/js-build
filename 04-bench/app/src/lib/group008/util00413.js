// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00413A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 10;
  } catch (e) {
    return 17;
  }
}

export function calcu00413B(x) {
  switch (x % 4) {
    case 0: return x + 7;
    case 1: return x - 10;
    default: return x * 17;
  }
}

export const Ku00413 = 513;
