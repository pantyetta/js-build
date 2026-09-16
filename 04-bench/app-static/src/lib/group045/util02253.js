// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02253 {
  static compute(x) {
    return x * 10 + 23;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02253A(x) {
  return Helperu02253.compute(x) + new Helperu02253().double;
}

export function calcu02253B(x) {
  return Helperu02253.compute(x) - 26;
}

export const Ku02253 = 320;
