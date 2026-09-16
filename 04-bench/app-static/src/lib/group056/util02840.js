// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02840A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 19;
  } catch (e) {
    return 13;
  }
}

export function calcu02840B(x) {
  switch (x % 5) {
    case 0: return x + 19;
    case 1: return x - 19;
    default: return x * 13;
  }
}

export const Ku02840 = 685;
