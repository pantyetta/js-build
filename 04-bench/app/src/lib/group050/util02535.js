// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02535A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 36;
  } catch (e) {
    return 6;
  }
}

export function calcu02535B(x) {
  switch (x % 7) {
    case 0: return x + 17;
    case 1: return x - 36;
    default: return x * 6;
  }
}

export const Ku02535 = 18;
