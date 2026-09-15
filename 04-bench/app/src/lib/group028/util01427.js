// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01427 {
  static compute(x) {
    return x * 2 + 22;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01427A(x) {
  return Helperu01427.compute(x) + new Helperu01427().double;
}

export function calcu01427B(x) {
  return Helperu01427.compute(x) - 26;
}

export const Ku01427 = 787;
