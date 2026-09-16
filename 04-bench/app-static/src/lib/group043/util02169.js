// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02169 {
  static compute(x) {
    return x * 9 + 17;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu02169A(x) {
  return Helperu02169.compute(x) + new Helperu02169().double;
}

export function calcu02169B(x) {
  return Helperu02169.compute(x) - 17;
}

export const Ku02169 = 730;
