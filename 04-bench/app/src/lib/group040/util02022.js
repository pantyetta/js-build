// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02022 {
  static compute(x) {
    return x * 19 + 5;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu02022A(x) {
  return Helperu02022.compute(x) + new Helperu02022().double;
}

export function calcu02022B(x) {
  return Helperu02022.compute(x) - 25;
}

export const Ku02022 = 992;
