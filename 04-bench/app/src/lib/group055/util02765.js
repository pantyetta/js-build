// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02765A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 6 + 17;
  } catch (e) {
    return 22;
  }
}

export function calcu02765B(x) {
  switch (x % 7) {
    case 0: return x + 6;
    case 1: return x - 17;
    default: return x * 22;
  }
}

export const Ku02765 = 82;
