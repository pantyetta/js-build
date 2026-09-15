// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02299A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 20;
  } catch (e) {
    return 3;
  }
}

export function calcu02299B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 20;
    default: return x * 3;
  }
}

export const Ku02299 = 717;
