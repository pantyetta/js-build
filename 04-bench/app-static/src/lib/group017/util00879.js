// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00879A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 30;
  } catch (e) {
    return 10;
  }
}

export function calcu00879B(x) {
  switch (x % 6) {
    case 0: return x + 16;
    case 1: return x - 30;
    default: return x * 10;
  }
}

export const Ku00879 = 752;
