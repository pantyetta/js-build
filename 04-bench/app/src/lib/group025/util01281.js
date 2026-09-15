// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01281A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 14 + 9;
  } catch (e) {
    return 1;
  }
}

export function calcu01281B(x) {
  switch (x % 7) {
    case 0: return x + 14;
    case 1: return x - 9;
    default: return x * 1;
  }
}

export const Ku01281 = 993;
