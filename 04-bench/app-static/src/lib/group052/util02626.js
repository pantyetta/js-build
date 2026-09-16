// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02626 {
  static compute(x) {
    return x * 12 + 28;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu02626A(x) {
  return Helperu02626.compute(x) + new Helperu02626().double;
}

export function calcu02626B(x) {
  return Helperu02626.compute(x) - 22;
}

export const Ku02626 = 158;
