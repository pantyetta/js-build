// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02706 {
  static compute(x) {
    return x * 7 + 12;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02706A(x) {
  return Helperu02706.compute(x) + new Helperu02706().double;
}

export function calcu02706B(x) {
  return Helperu02706.compute(x) - 28;
}

export const Ku02706 = 366;
