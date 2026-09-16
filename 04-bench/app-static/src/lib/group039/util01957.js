// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01957A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 1;
  } catch (e) {
    return 6;
  }
}

export function calcu01957B(x) {
  switch (x % 3) {
    case 0: return x + 2;
    case 1: return x - 1;
    default: return x * 6;
  }
}

export const Ku01957 = 146;
