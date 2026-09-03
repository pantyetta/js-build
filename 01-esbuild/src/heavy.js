// 動的 import (`await import('./heavy.js')`) されるモジュール。
// バンドラはこれを「別ファイル(chunk)」として切り出す = code splitting。
export const heavyMessage =
  '動的 import で、ボタンを押したあとに初めてダウンロードされたモジュールです';
