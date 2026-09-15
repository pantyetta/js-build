// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02310A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 19;
  } catch (e) {
    return 22;
  }
}

export function calcu02310B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 19;
    default: return x * 22;
  }
}

export const Ku02310 = 133;
