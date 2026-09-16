// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02126 {
  static compute(x) {
    return x * 3 + 34;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu02126A(x) {
  return Helperu02126.compute(x) + new Helperu02126().double;
}

export function calcu02126B(x) {
  return Helperu02126.compute(x) - 7;
}

export const Ku02126 = 974;
