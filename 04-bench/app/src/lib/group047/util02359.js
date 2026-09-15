// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02359 {
  static compute(x) {
    return x * 10 + 30;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02359A(x) {
  return Helperu02359.compute(x) + new Helperu02359().double;
}

export function calcu02359B(x) {
  return Helperu02359.compute(x) - 8;
}

export const Ku02359 = 438;
