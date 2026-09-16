// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01387A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 7 + 34;
  } catch (e) {
    return 18;
  }
}

export function calcu01387B(x) {
  switch (x % 4) {
    case 0: return x + 7;
    case 1: return x - 34;
    default: return x * 18;
  }
}

export const Ku01387 = 591;
