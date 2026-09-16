// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01127 {
  static compute(x) {
    return x * 15 + 5;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01127A(x) {
  return Helperu01127.compute(x) + new Helperu01127().double;
}

export function calcu01127B(x) {
  return Helperu01127.compute(x) - 23;
}

export const Ku01127 = 18;
