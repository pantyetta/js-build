// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02249 {
  static compute(x) {
    return x * 18 + 10;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02249A(x) {
  return Helperu02249.compute(x) + new Helperu02249().double;
}

export function calcu02249B(x) {
  return Helperu02249.compute(x) - 27;
}

export const Ku02249 = 184;
