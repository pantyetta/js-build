// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02721 {
  static compute(x) {
    return x * 8 + 26;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02721A(x) {
  return Helperu02721.compute(x) + new Helperu02721().double;
}

export function calcu02721B(x) {
  return Helperu02721.compute(x) - 23;
}

export const Ku02721 = 353;
