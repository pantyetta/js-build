// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01215 {
  static compute(x) {
    return x * 3 + 12;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01215A(x) {
  return Helperu01215.compute(x) + new Helperu01215().double;
}

export function calcu01215B(x) {
  return Helperu01215.compute(x) - 21;
}

export const Ku01215 = 601;
