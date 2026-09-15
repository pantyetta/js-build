// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02600A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 28;
  } catch (e) {
    return 29;
  }
}

export function calcu02600B(x) {
  switch (x % 3) {
    case 0: return x + 9;
    case 1: return x - 28;
    default: return x * 29;
  }
}

export const Ku02600 = 832;
