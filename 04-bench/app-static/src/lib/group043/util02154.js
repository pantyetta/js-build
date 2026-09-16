// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02154A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 2;
  } catch (e) {
    return 5;
  }
}

export function calcu02154B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 2;
    default: return x * 5;
  }
}

export const Ku02154 = 711;
