// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00268A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 6;
  } catch (e) {
    return 18;
  }
}

export function calcu00268B(x) {
  switch (x % 6) {
    case 0: return x + 12;
    case 1: return x - 6;
    default: return x * 18;
  }
}

export const Ku00268 = 824;
