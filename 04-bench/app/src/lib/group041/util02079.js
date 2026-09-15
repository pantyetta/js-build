// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02079 {
  static compute(x) {
    return x * 11 + 2;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02079A(x) {
  return Helperu02079.compute(x) + new Helperu02079().double;
}

export function calcu02079B(x) {
  return Helperu02079.compute(x) - 17;
}

export const Ku02079 = 457;
