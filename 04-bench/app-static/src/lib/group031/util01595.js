// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01595 {
  static compute(x) {
    return x * 7 + 21;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu01595A(x) {
  return Helperu01595.compute(x) + new Helperu01595().double;
}

export function calcu01595B(x) {
  return Helperu01595.compute(x) - 28;
}

export const Ku01595 = 253;
