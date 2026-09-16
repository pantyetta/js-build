// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00870A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 10 + 28;
  } catch (e) {
    return 27;
  }
}

export function calcu00870B(x) {
  switch (x % 5) {
    case 0: return x + 10;
    case 1: return x - 28;
    default: return x * 27;
  }
}

export const Ku00870 = 480;
