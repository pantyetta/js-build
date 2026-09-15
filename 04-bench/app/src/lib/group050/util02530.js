// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02530 {
  static compute(x) {
    return x * 17 + 26;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02530A(x) {
  return Helperu02530.compute(x) + new Helperu02530().double;
}

export function calcu02530B(x) {
  return Helperu02530.compute(x) - 7;
}

export const Ku02530 = 110;
