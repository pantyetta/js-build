// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02629A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 15;
  } catch (e) {
    return 1;
  }
}

export function calcu02629B(x) {
  switch (x % 7) {
    case 0: return x + 16;
    case 1: return x - 15;
    default: return x * 1;
  }
}

export const Ku02629 = 725;
