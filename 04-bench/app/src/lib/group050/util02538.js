// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02538A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 20;
  } catch (e) {
    return 7;
  }
}

export function calcu02538B(x) {
  switch (x % 4) {
    case 0: return x + 19;
    case 1: return x - 20;
    default: return x * 7;
  }
}

export const Ku02538 = 853;
