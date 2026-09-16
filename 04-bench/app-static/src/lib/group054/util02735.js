// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02735 {
  static compute(x) {
    return x * 2 + 4;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu02735A(x) {
  return Helperu02735.compute(x) + new Helperu02735().double;
}

export function calcu02735B(x) {
  return Helperu02735.compute(x) - 20;
}

export const Ku02735 = 411;
