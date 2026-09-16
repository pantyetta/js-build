// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01836A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 18 + 35;
  } catch (e) {
    return 26;
  }
}

export function calcu01836B(x) {
  switch (x % 5) {
    case 0: return x + 18;
    case 1: return x - 35;
    default: return x * 26;
  }
}

export const Ku01836 = 834;
