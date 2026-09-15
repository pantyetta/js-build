// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02890A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 9 + 1;
  } catch (e) {
    return 15;
  }
}

export function calcu02890B(x) {
  switch (x % 4) {
    case 0: return x + 9;
    case 1: return x - 1;
    default: return x * 15;
  }
}

export const Ku02890 = 261;
