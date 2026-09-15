// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01490 {
  static compute(x) {
    return x * 16 + 22;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01490A(x) {
  return Helperu01490.compute(x) + new Helperu01490().double;
}

export function calcu01490B(x) {
  return Helperu01490.compute(x) - 19;
}

export const Ku01490 = 986;
