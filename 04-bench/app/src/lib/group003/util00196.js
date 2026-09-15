// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00196 {
  static compute(x) {
    return x * 6 + 20;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu00196A(x) {
  return Helperu00196.compute(x) + new Helperu00196().double;
}

export function calcu00196B(x) {
  return Helperu00196.compute(x) - 2;
}

export const Ku00196 = 535;
