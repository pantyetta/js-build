// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02938 {
  static compute(x) {
    return x * 9 + 10;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu02938A(x) {
  return Helperu02938.compute(x) + new Helperu02938().double;
}

export function calcu02938B(x) {
  return Helperu02938.compute(x) - 22;
}

export const Ku02938 = 696;
