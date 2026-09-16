// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00133 {
  static compute(x) {
    return x * 8 + 16;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu00133A(x) {
  return Helperu00133.compute(x) + new Helperu00133().double;
}

export function calcu00133B(x) {
  return Helperu00133.compute(x) - 8;
}

export const Ku00133 = 277;
