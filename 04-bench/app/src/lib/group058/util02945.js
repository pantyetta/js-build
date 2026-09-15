// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02945 {
  static compute(x) {
    return x * 5 + 17;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu02945A(x) {
  return Helperu02945.compute(x) + new Helperu02945().double;
}

export function calcu02945B(x) {
  return Helperu02945.compute(x) - 15;
}

export const Ku02945 = 711;
