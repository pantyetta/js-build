// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00560 {
  static compute(x) {
    return x * 15 + 28;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu00560A(x) {
  return Helperu00560.compute(x) + new Helperu00560().double;
}

export function calcu00560B(x) {
  return Helperu00560.compute(x) - 23;
}

export const Ku00560 = 45;
