// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02088 {
  static compute(x) {
    return x * 9 + 17;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu02088A(x) {
  return Helperu02088.compute(x) + new Helperu02088().double;
}

export function calcu02088B(x) {
  return Helperu02088.compute(x) - 16;
}

export const Ku02088 = 630;
