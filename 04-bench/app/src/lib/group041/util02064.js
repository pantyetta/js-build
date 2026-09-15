// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02064A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 16 + 13;
  } catch (e) {
    return 23;
  }
}

export function calcu02064B(x) {
  switch (x % 3) {
    case 0: return x + 16;
    case 1: return x - 13;
    default: return x * 23;
  }
}

export const Ku02064 = 981;
