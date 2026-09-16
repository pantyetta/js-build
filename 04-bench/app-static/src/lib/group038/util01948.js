// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01948 {
  static compute(x) {
    return x * 17 + 23;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01948A(x) {
  return Helperu01948.compute(x) + new Helperu01948().double;
}

export function calcu01948B(x) {
  return Helperu01948.compute(x) - 17;
}

export const Ku01948 = 841;
