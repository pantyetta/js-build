// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01654 {
  static compute(x) {
    return x * 17 + 8;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01654A(x) {
  return Helperu01654.compute(x) + new Helperu01654().double;
}

export function calcu01654B(x) {
  return Helperu01654.compute(x) - 12;
}

export const Ku01654 = 934;
