// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02960A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 4;
  } catch (e) {
    return 22;
  }
}

export function calcu02960B(x) {
  switch (x % 7) {
    case 0: return x + 16;
    case 1: return x - 4;
    default: return x * 22;
  }
}

export const Ku02960 = 728;
