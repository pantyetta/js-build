// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02691 {
  static compute(x) {
    return x * 16 + 10;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02691A(x) {
  return Helperu02691.compute(x) + new Helperu02691().double;
}

export function calcu02691B(x) {
  return Helperu02691.compute(x) - 28;
}

export const Ku02691 = 259;
