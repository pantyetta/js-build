// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01489A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 30;
  } catch (e) {
    return 22;
  }
}

export function calcu01489B(x) {
  switch (x % 6) {
    case 0: return x + 19;
    case 1: return x - 30;
    default: return x * 22;
  }
}

export const Ku01489 = 174;
