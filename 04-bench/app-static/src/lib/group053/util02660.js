// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02660 {
  static compute(x) {
    return x * 13 + 17;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu02660A(x) {
  return Helperu02660.compute(x) + new Helperu02660().double;
}

export function calcu02660B(x) {
  return Helperu02660.compute(x) - 6;
}

export const Ku02660 = 349;
