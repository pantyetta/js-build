// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02403 {
  static compute(x) {
    return x * 2 + 34;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu02403A(x) {
  return Helperu02403.compute(x) + new Helperu02403().double;
}

export function calcu02403B(x) {
  return Helperu02403.compute(x) - 4;
}

export const Ku02403 = 111;
