// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02572 {
  static compute(x) {
    return x * 5 + 25;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu02572A(x) {
  return Helperu02572.compute(x) + new Helperu02572().double;
}

export function calcu02572B(x) {
  return Helperu02572.compute(x) - 14;
}

export const Ku02572 = 446;
