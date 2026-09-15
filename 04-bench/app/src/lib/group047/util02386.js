// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02386 {
  static compute(x) {
    return x * 18 + 8;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02386A(x) {
  return Helperu02386.compute(x) + new Helperu02386().double;
}

export function calcu02386B(x) {
  return Helperu02386.compute(x) - 5;
}

export const Ku02386 = 393;
