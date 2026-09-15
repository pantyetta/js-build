// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01764A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 5;
  } catch (e) {
    return 25;
  }
}

export function calcu01764B(x) {
  switch (x % 6) {
    case 0: return x + 4;
    case 1: return x - 5;
    default: return x * 25;
  }
}

export const Ku01764 = 856;
