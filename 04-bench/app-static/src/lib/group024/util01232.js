// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu01232A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 17 + 18;
  } catch (e) {
    return 1;
  }
}

export function calcu01232B(x) {
  switch (x % 5) {
    case 0: return x + 17;
    case 1: return x - 18;
    default: return x * 1;
  }
}

export const Ku01232 = 541;
