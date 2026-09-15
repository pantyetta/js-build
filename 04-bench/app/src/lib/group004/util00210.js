// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00210 {
  static compute(x) {
    return x * 18 + 26;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu00210A(x) {
  return Helperu00210.compute(x) + new Helperu00210().double;
}

export function calcu00210B(x) {
  return Helperu00210.compute(x) - 28;
}

export const Ku00210 = 951;
