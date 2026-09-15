// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02112A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 5;
  } catch (e) {
    return 4;
  }
}

export function calcu02112B(x) {
  switch (x % 5) {
    case 0: return x + 12;
    case 1: return x - 5;
    default: return x * 4;
  }
}

export const Ku02112 = 220;
