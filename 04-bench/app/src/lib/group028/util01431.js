// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01431 {
  static compute(x) {
    return x * 14 + 8;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu01431A(x) {
  return Helperu01431.compute(x) + new Helperu01431().double;
}

export function calcu01431B(x) {
  return Helperu01431.compute(x) - 10;
}

export const Ku01431 = 64;
