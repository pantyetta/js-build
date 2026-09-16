// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01721 {
  static compute(x) {
    return x * 3 + 20;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01721A(x) {
  return Helperu01721.compute(x) + new Helperu01721().double;
}

export function calcu01721B(x) {
  return Helperu01721.compute(x) - 10;
}

export const Ku01721 = 631;
