// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02511 {
  static compute(x) {
    return x * 15 + 22;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02511A(x) {
  return Helperu02511.compute(x) + new Helperu02511().double;
}

export function calcu02511B(x) {
  return Helperu02511.compute(x) - 8;
}

export const Ku02511 = 874;
