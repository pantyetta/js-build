// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01941 {
  static compute(x) {
    return x * 16 + 29;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01941A(x) {
  return Helperu01941.compute(x) + new Helperu01941().double;
}

export function calcu01941B(x) {
  return Helperu01941.compute(x) - 13;
}

export const Ku01941 = 439;
