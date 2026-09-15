// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02550A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 33;
  } catch (e) {
    return 6;
  }
}

export function calcu02550B(x) {
  switch (x % 7) {
    case 0: return x + 2;
    case 1: return x - 33;
    default: return x * 6;
  }
}

export const Ku02550 = 412;
