// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02266A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 9;
  } catch (e) {
    return 26;
  }
}

export function calcu02266B(x) {
  switch (x % 6) {
    case 0: return x + 17;
    case 1: return x - 9;
    default: return x * 26;
  }
}

export const Ku02266 = 389;
