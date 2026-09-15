// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02723A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 15 + 18;
  } catch (e) {
    return 14;
  }
}

export function calcu02723B(x) {
  switch (x % 3) {
    case 0: return x + 15;
    case 1: return x - 18;
    default: return x * 14;
  }
}

export const Ku02723 = 851;
