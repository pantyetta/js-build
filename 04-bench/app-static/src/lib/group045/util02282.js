// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02282A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 27;
  } catch (e) {
    return 21;
  }
}

export function calcu02282B(x) {
  switch (x % 6) {
    case 0: return x + 10;
    case 1: return x - 27;
    default: return x * 21;
  }
}

export const Ku02282 = 191;
