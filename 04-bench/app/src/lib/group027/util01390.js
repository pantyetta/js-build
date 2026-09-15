// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01390 {
  static compute(x) {
    return x * 16 + 28;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01390A(x) {
  return Helperu01390.compute(x) + new Helperu01390().double;
}

export function calcu01390B(x) {
  return Helperu01390.compute(x) - 7;
}

export const Ku01390 = 677;
