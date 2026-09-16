// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01972 {
  static compute(x) {
    return x * 19 + 21;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu01972A(x) {
  return Helperu01972.compute(x) + new Helperu01972().double;
}

export function calcu01972B(x) {
  return Helperu01972.compute(x) - 14;
}

export const Ku01972 = 516;
