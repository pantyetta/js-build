// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01108A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 21;
  } catch (e) {
    return 7;
  }
}

export function calcu01108B(x) {
  switch (x % 3) {
    case 0: return x + 18;
    case 1: return x - 21;
    default: return x * 7;
  }
}

export const Ku01108 = 2;
