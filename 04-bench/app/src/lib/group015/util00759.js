// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00759A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 11;
  } catch (e) {
    return 9;
  }
}

export function calcu00759B(x) {
  switch (x % 6) {
    case 0: return x + 9;
    case 1: return x - 11;
    default: return x * 9;
  }
}

export const Ku00759 = 223;
