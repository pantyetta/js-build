// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02696 {
  static compute(x) {
    return x * 18 + 8;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02696A(x) {
  return Helperu02696.compute(x) + new Helperu02696().double;
}

export function calcu02696B(x) {
  return Helperu02696.compute(x) - 8;
}

export const Ku02696 = 572;
