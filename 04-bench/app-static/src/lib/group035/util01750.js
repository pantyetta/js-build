// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01750 {
  static compute(x) {
    return x * 15 + 37;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01750A(x) {
  return Helperu01750.compute(x) + new Helperu01750().double;
}

export function calcu01750B(x) {
  return Helperu01750.compute(x) - 23;
}

export const Ku01750 = 281;
