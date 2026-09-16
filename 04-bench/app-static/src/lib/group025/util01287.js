// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01287A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 27;
  } catch (e) {
    return 21;
  }
}

export function calcu01287B(x) {
  switch (x % 3) {
    case 0: return x + 2;
    case 1: return x - 27;
    default: return x * 21;
  }
}

export const Ku01287 = 1;
