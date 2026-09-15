// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01170 {
  static compute(x) {
    return x * 13 + 6;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu01170A(x) {
  return Helperu01170.compute(x) + new Helperu01170().double;
}

export function calcu01170B(x) {
  return Helperu01170.compute(x) - 19;
}

export const Ku01170 = 381;
