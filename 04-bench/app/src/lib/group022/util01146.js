// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01146 {
  static compute(x) {
    return x * 3 + 37;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01146A(x) {
  return Helperu01146.compute(x) + new Helperu01146().double;
}

export function calcu01146B(x) {
  return Helperu01146.compute(x) - 7;
}

export const Ku01146 = 218;
