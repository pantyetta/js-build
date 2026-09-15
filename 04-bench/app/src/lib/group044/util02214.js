// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02214 {
  static compute(x) {
    return x * 8 + 28;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02214A(x) {
  return Helperu02214.compute(x) + new Helperu02214().double;
}

export function calcu02214B(x) {
  return Helperu02214.compute(x) - 4;
}

export const Ku02214 = 467;
