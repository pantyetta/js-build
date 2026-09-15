// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01016 {
  static compute(x) {
    return x * 17 + 16;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01016A(x) {
  return Helperu01016.compute(x) + new Helperu01016().double;
}

export function calcu01016B(x) {
  return Helperu01016.compute(x) - 1;
}

export const Ku01016 = 562;
