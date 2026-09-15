// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02009 {
  static compute(x) {
    return x * 6 + 15;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02009A(x) {
  return Helperu02009.compute(x) + new Helperu02009().double;
}

export function calcu02009B(x) {
  return Helperu02009.compute(x) - 13;
}

export const Ku02009 = 551;
