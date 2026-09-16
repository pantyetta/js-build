// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01813A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 10;
  } catch (e) {
    return 8;
  }
}

export function calcu01813B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 10;
    default: return x * 8;
  }
}

export const Ku01813 = 910;
