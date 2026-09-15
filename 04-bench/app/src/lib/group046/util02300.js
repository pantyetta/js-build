// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02300A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 11;
  } catch (e) {
    return 17;
  }
}

export function calcu02300B(x) {
  switch (x % 3) {
    case 0: return x + 15;
    case 1: return x - 11;
    default: return x * 17;
  }
}

export const Ku02300 = 300;
