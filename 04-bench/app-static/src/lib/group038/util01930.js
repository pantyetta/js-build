// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01930 {
  static compute(x) {
    return x * 19 + 35;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu01930A(x) {
  return Helperu01930.compute(x) + new Helperu01930().double;
}

export function calcu01930B(x) {
  return Helperu01930.compute(x) - 13;
}

export const Ku01930 = 97;
