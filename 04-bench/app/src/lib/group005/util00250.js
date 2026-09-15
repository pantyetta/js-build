// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 4 — import なしの葉モジュール。

export function calcu00250A(x) {
  try {
    if (x < 0) throw new Error("neg");
    return x * 13 + 9;
  } catch (e) {
    return 13;
  }
}

export function calcu00250B(x) {
  switch (x % 6) {
    case 0: return x + 13;
    case 1: return x - 9;
    default: return x * 13;
  }
}

export const Ku00250 = 150;
