// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02633 {
  static compute(x) {
    return x * 11 + 15;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02633A(x) {
  return Helperu02633.compute(x) + new Helperu02633().double;
}

export function calcu02633B(x) {
  return Helperu02633.compute(x) - 20;
}

export const Ku02633 = 654;
