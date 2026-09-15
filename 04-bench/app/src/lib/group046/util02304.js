// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02304A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 33;
  } catch (e) {
    return 2;
  }
}

export function calcu02304B(x) {
  switch (x % 5) {
    case 0: return x + 13;
    case 1: return x - 33;
    default: return x * 2;
  }
}

export const Ku02304 = 467;
