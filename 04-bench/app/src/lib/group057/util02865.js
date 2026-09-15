// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02865 {
  static compute(x) {
    return x * 10 + 5;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02865A(x) {
  return Helperu02865.compute(x) + new Helperu02865().double;
}

export function calcu02865B(x) {
  return Helperu02865.compute(x) - 23;
}

export const Ku02865 = 698;
