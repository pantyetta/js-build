// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02122A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 30;
  } catch (e) {
    return 29;
  }
}

export function calcu02122B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 30;
    default: return x * 29;
  }
}

export const Ku02122 = 443;
