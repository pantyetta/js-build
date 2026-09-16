// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01161A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 4 + 21;
  } catch (e) {
    return 27;
  }
}

export function calcu01161B(x) {
  switch (x % 7) {
    case 0: return x + 4;
    case 1: return x - 21;
    default: return x * 27;
  }
}

export const Ku01161 = 543;
