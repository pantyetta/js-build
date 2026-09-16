// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01603 {
  static compute(x) {
    return x * 9 + 22;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01603A(x) {
  return Helperu01603.compute(x) + new Helperu01603().double;
}

export function calcu01603B(x) {
  return Helperu01603.compute(x) - 23;
}

export const Ku01603 = 188;
