export function setupCounter(el) {
  let count = 0;
  const render = () => {
    el.textContent = `count is ${count}`;
  };
  el.addEventListener('click', () => {
    count += 1;
    render();
  });
  render();
}
