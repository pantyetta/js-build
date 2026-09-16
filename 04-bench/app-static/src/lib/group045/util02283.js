// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02283A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 8 + 25;
  } catch (e) {
    return 19;
  }
}

export function calcu02283B(x) {
  switch (x % 5) {
    case 0: return x + 8;
    case 1: return x - 25;
    default: return x * 19;
  }
}

export const Ku02283 = 956;
