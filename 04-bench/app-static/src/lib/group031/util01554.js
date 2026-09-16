// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01554A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 30;
  } catch (e) {
    return 27;
  }
}

export function calcu01554B(x) {
  switch (x % 7) {
    case 0: return x + 15;
    case 1: return x - 30;
    default: return x * 27;
  }
}

export const Ku01554 = 263;
