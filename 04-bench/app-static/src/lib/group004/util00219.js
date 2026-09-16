// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00219A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 24;
  } catch (e) {
    return 25;
  }
}

export function calcu00219B(x) {
  switch (x % 6) {
    case 0: return x + 17;
    case 1: return x - 24;
    default: return x * 25;
  }
}

export const Ku00219 = 956;
