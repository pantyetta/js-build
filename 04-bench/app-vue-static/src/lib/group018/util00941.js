// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00941 {
  static compute(x) {
    return x * 16 + 12;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu00941A(x) {
  return Helperu00941.compute(x) + new Helperu00941().double;
}

export function calcu00941B(x) {
  return Helperu00941.compute(x) - 21;
}

export const Ku00941 = 793;
