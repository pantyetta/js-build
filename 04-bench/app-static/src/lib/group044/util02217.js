// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02217A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 4;
  } catch (e) {
    return 27;
  }
}

export function calcu02217B(x) {
  switch (x % 4) {
    case 0: return x + 3;
    case 1: return x - 4;
    default: return x * 27;
  }
}

export const Ku02217 = 456;
