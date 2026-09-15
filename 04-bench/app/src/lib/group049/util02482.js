// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02482 {
  static compute(x) {
    return x * 17 + 20;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02482A(x) {
  return Helperu02482.compute(x) + new Helperu02482().double;
}

export function calcu02482B(x) {
  return Helperu02482.compute(x) - 3;
}

export const Ku02482 = 639;
