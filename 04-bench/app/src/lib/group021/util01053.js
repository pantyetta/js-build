// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01053A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 19 + 37;
  } catch (e) {
    return 16;
  }
}

export function calcu01053B(x) {
  switch (x % 6) {
    case 0: return x + 19;
    case 1: return x - 37;
    default: return x * 16;
  }
}

export const Ku01053 = 680;
