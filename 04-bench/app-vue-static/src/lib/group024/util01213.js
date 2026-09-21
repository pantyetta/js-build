// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01213 {
  static compute(x) {
    return x * 8 + 13;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01213A(x) {
  return Helperu01213.compute(x) + new Helperu01213().double;
}

export function calcu01213B(x) {
  return Helperu01213.compute(x) - 21;
}

export const Ku01213 = 565;
