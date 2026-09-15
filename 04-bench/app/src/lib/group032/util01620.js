// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01620 {
  static compute(x) {
    return x * 16 + 37;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01620A(x) {
  return Helperu01620.compute(x) + new Helperu01620().double;
}

export function calcu01620B(x) {
  return Helperu01620.compute(x) - 16;
}

export const Ku01620 = 961;
