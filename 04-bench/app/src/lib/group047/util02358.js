// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02358A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 8;
  } catch (e) {
    return 3;
  }
}

export function calcu02358B(x) {
  switch (x % 5) {
    case 0: return x + 15;
    case 1: return x - 8;
    default: return x * 3;
  }
}

export const Ku02358 = 268;
