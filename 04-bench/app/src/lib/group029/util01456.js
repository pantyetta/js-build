// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01456 {
  static compute(x) {
    return x * 10 + 31;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01456A(x) {
  return Helperu01456.compute(x) + new Helperu01456().double;
}

export function calcu01456B(x) {
  return Helperu01456.compute(x) - 22;
}

export const Ku01456 = 500;
