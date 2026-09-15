// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00292 {
  static compute(x) {
    return x * 5 + 23;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu00292A(x) {
  return Helperu00292.compute(x) + new Helperu00292().double;
}

export function calcu00292B(x) {
  return Helperu00292.compute(x) - 3;
}

export const Ku00292 = 976;
