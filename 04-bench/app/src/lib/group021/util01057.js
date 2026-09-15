// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01057 {
  static compute(x) {
    return x * 16 + 22;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01057A(x) {
  return Helperu01057.compute(x) + new Helperu01057().double;
}

export function calcu01057B(x) {
  return Helperu01057.compute(x) - 26;
}

export const Ku01057 = 116;
