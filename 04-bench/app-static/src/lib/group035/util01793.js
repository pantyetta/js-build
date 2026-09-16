// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01793 {
  static compute(x) {
    return x * 18 + 9;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01793A(x) {
  return Helperu01793.compute(x) + new Helperu01793().double;
}

export function calcu01793B(x) {
  return Helperu01793.compute(x) - 14;
}

export const Ku01793 = 31;
