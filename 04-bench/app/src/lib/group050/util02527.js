// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02527A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 4;
  } catch (e) {
    return 1;
  }
}

export function calcu02527B(x) {
  switch (x % 7) {
    case 0: return x + 19;
    case 1: return x - 4;
    default: return x * 1;
  }
}

export const Ku02527 = 671;
