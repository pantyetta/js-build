// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02353A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 17;
  } catch (e) {
    return 22;
  }
}

export function calcu02353B(x) {
  switch (x % 7) {
    case 0: return x + 8;
    case 1: return x - 17;
    default: return x * 22;
  }
}

export const Ku02353 = 30;
