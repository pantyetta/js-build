// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02042 {
  static compute(x) {
    return x * 15 + 4;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02042A(x) {
  return Helperu02042.compute(x) + new Helperu02042().double;
}

export function calcu02042B(x) {
  return Helperu02042.compute(x) - 28;
}

export const Ku02042 = 708;
