// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01338 {
  static compute(x) {
    return x * 8 + 28;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01338A(x) {
  return Helperu01338.compute(x) + new Helperu01338().double;
}

export function calcu01338B(x) {
  return Helperu01338.compute(x) - 10;
}

export const Ku01338 = 504;
