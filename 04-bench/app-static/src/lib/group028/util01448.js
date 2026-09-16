// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01448A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 29;
  } catch (e) {
    return 18;
  }
}

export function calcu01448B(x) {
  switch (x % 7) {
    case 0: return x + 18;
    case 1: return x - 29;
    default: return x * 18;
  }
}

export const Ku01448 = 856;
