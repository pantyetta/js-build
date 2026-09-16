// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01846A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 8;
  } catch (e) {
    return 18;
  }
}

export function calcu01846B(x) {
  switch (x % 6) {
    case 0: return x + 17;
    case 1: return x - 8;
    default: return x * 18;
  }
}

export const Ku01846 = 441;
