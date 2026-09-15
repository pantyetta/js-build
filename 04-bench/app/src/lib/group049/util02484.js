// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02484 {
  static compute(x) {
    return x * 12 + 6;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu02484A(x) {
  return Helperu02484.compute(x) + new Helperu02484().double;
}

export function calcu02484B(x) {
  return Helperu02484.compute(x) - 20;
}

export const Ku02484 = 307;
