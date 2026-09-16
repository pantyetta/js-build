// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00771 {
  static compute(x) {
    return x * 8 + 21;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu00771A(x) {
  return Helperu00771.compute(x) + new Helperu00771().double;
}

export function calcu00771B(x) {
  return Helperu00771.compute(x) - 18;
}

export const Ku00771 = 243;
