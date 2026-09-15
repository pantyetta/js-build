// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02108A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 19;
  } catch (e) {
    return 4;
  }
}

export function calcu02108B(x) {
  switch (x % 6) {
    case 0: return x + 7;
    case 1: return x - 19;
    default: return x * 4;
  }
}

export const Ku02108 = 39;
