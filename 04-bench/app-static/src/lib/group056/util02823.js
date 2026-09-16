// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02823 {
  static compute(x) {
    return x * 4 + 37;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02823A(x) {
  return Helperu02823.compute(x) + new Helperu02823().double;
}

export function calcu02823B(x) {
  return Helperu02823.compute(x) - 22;
}

export const Ku02823 = 359;
