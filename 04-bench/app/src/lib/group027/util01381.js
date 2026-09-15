// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01381 {
  static compute(x) {
    return x * 10 + 37;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01381A(x) {
  return Helperu01381.compute(x) + new Helperu01381().double;
}

export function calcu01381B(x) {
  return Helperu01381.compute(x) - 18;
}

export const Ku01381 = 844;
