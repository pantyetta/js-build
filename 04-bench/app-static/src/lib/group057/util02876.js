// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02876A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 12 + 19;
  } catch (e) {
    return 19;
  }
}

export function calcu02876B(x) {
  switch (x % 3) {
    case 0: return x + 12;
    case 1: return x - 19;
    default: return x * 19;
  }
}

export const Ku02876 = 417;
