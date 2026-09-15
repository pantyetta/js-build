// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02903A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 35;
  } catch (e) {
    return 1;
  }
}

export function calcu02903B(x) {
  switch (x % 3) {
    case 0: return x + 15;
    case 1: return x - 35;
    default: return x * 1;
  }
}

export const Ku02903 = 500;
