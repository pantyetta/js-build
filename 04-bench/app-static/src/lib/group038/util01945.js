// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01945 {
  static compute(x) {
    return x * 11 + 16;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01945A(x) {
  return Helperu01945.compute(x) + new Helperu01945().double;
}

export function calcu01945B(x) {
  return Helperu01945.compute(x) - 17;
}

export const Ku01945 = 540;
