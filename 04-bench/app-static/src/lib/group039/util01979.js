// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01979A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 15;
  } catch (e) {
    return 5;
  }
}

export function calcu01979B(x) {
  switch (x % 7) {
    case 0: return x + 6;
    case 1: return x - 15;
    default: return x * 5;
  }
}

export const Ku01979 = 356;
