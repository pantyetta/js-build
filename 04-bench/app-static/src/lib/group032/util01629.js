// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01629 {
  static compute(x) {
    return x * 16 + 33;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01629A(x) {
  return Helperu01629.compute(x) + new Helperu01629().double;
}

export function calcu01629B(x) {
  return Helperu01629.compute(x) - 25;
}

export const Ku01629 = 781;
