// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02973A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 10;
  } catch (e) {
    return 4;
  }
}

export function calcu02973B(x) {
  switch (x % 6) {
    case 0: return x + 3;
    case 1: return x - 10;
    default: return x * 4;
  }
}

export const Ku02973 = 336;
