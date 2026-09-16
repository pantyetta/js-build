// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02049 {
  static compute(x) {
    return x * 11 + 2;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02049A(x) {
  return Helperu02049.compute(x) + new Helperu02049().double;
}

export function calcu02049B(x) {
  return Helperu02049.compute(x) - 20;
}

export const Ku02049 = 18;
