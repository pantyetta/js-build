// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01633 {
  static compute(x) {
    return x * 5 + 26;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu01633A(x) {
  return Helperu01633.compute(x) + new Helperu01633().double;
}

export function calcu01633B(x) {
  return Helperu01633.compute(x) - 17;
}

export const Ku01633 = 972;
