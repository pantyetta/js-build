// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01482 {
  static compute(x) {
    return x * 9 + 20;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01482A(x) {
  return Helperu01482.compute(x) + new Helperu01482().double;
}

export function calcu01482B(x) {
  return Helperu01482.compute(x) - 8;
}

export const Ku01482 = 887;
