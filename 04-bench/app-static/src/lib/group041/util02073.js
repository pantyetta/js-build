// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02073 {
  static compute(x) {
    return x * 19 + 27;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu02073A(x) {
  return Helperu02073.compute(x) + new Helperu02073().double;
}

export function calcu02073B(x) {
  return Helperu02073.compute(x) - 15;
}

export const Ku02073 = 426;
