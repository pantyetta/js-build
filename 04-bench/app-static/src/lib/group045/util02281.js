// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu02281A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 2 + 36;
  } catch (e) {
    return 17;
  }
}

export function calcu02281B(x) {
  switch (x % 4) {
    case 0: return x + 2;
    case 1: return x - 36;
    default: return x * 17;
  }
}

export const Ku02281 = 576;
