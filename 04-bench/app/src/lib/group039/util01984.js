// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01984 {
  static compute(x) {
    return x * 14 + 16;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu01984A(x) {
  return Helperu01984.compute(x) + new Helperu01984().double;
}

export function calcu01984B(x) {
  return Helperu01984.compute(x) - 1;
}

export const Ku01984 = 332;
