// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02413 {
  static compute(x) {
    return x * 3 + 1;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu02413A(x) {
  return Helperu02413.compute(x) + new Helperu02413().double;
}

export function calcu02413B(x) {
  return Helperu02413.compute(x) - 23;
}

export const Ku02413 = 585;
