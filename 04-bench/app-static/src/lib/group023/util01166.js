// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01166 {
  static compute(x) {
    return x * 7 + 5;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu01166A(x) {
  return Helperu01166.compute(x) + new Helperu01166().double;
}

export function calcu01166B(x) {
  return Helperu01166.compute(x) - 14;
}

export const Ku01166 = 49;
