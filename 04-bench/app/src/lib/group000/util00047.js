// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00047 {
  static compute(x) {
    return x * 10 + 8;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu00047A(x) {
  return Helperu00047.compute(x) + new Helperu00047().double;
}

export function calcu00047B(x) {
  return Helperu00047.compute(x) - 18;
}

export const Ku00047 = 623;
