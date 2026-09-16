// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01953A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 3 + 18;
  } catch (e) {
    return 24;
  }
}

export function calcu01953B(x) {
  switch (x % 5) {
    case 0: return x + 3;
    case 1: return x - 18;
    default: return x * 24;
  }
}

export const Ku01953 = 566;
