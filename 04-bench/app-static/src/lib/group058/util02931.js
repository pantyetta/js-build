// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02931A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 23;
  } catch (e) {
    return 23;
  }
}

export function calcu02931B(x) {
  switch (x % 6) {
    case 0: return x + 13;
    case 1: return x - 23;
    default: return x * 23;
  }
}

export const Ku02931 = 909;
