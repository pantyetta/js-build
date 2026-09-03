// tree shaking の観察用。
// used() は main.js から使われる / unused() はどこからも使われない。
export function used() {
  return 'JS build tools';
}

export function unused() {
  return 'UNUSED_MARKER: この文字列がビルド結果に残っていたら tree shaking が効いていない';
}
