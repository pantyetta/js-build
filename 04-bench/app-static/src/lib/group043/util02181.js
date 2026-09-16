// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02181 {
  static compute(x) {
    return x * 10 + 30;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02181A(x) {
  return Helperu02181.compute(x) + new Helperu02181().double;
}

export function calcu02181B(x) {
  return Helperu02181.compute(x) - 27;
}

export const Ku02181 = 499;
