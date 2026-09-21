// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00048 {
  static compute(x) {
    return x * 17 + 10;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu00048A(x) {
  return Helperu00048.compute(x) + new Helperu00048().double;
}

export function calcu00048B(x) {
  return Helperu00048.compute(x) - 15;
}

export const Ku00048 = 943;
