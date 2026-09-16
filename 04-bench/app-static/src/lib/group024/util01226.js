// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01226A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 16;
  } catch (e) {
    return 28;
  }
}

export function calcu01226B(x) {
  switch (x % 7) {
    case 0: return x + 13;
    case 1: return x - 16;
    default: return x * 28;
  }
}

export const Ku01226 = 451;
