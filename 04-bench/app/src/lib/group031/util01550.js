// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01550 {
  static compute(x) {
    return x * 15 + 26;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01550A(x) {
  return Helperu01550.compute(x) + new Helperu01550().double;
}

export function calcu01550B(x) {
  return Helperu01550.compute(x) - 7;
}

export const Ku01550 = 335;
