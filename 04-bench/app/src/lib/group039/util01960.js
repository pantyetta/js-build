// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01960A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 20;
  } catch (e) {
    return 15;
  }
}

export function calcu01960B(x) {
  switch (x % 4) {
    case 0: return x + 13;
    case 1: return x - 20;
    default: return x * 15;
  }
}

export const Ku01960 = 137;
