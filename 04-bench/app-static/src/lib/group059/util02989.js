// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02989 {
  static compute(x) {
    return x * 14 + 19;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu02989A(x) {
  return Helperu02989.compute(x) + new Helperu02989().double;
}

export function calcu02989B(x) {
  return Helperu02989.compute(x) - 15;
}

export const Ku02989 = 604;
