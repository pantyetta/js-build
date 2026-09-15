// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02191A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 20;
  } catch (e) {
    return 14;
  }
}

export function calcu02191B(x) {
  switch (x % 7) {
    case 0: return x + 9;
    case 1: return x - 20;
    default: return x * 14;
  }
}

export const Ku02191 = 320;
