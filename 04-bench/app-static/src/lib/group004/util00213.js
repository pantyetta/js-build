// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00213A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 27;
  } catch (e) {
    return 28;
  }
}

export function calcu00213B(x) {
  switch (x % 4) {
    case 0: return x + 18;
    case 1: return x - 27;
    default: return x * 28;
  }
}

export const Ku00213 = 528;
