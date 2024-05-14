//hybani
const mouseEl = document.querySelector('.mouse');
const root = document.documentElement;

document.addEventListener('mousemove', (e) => {
  let x = -e.clientX / 2;
  let y = -e.clientY / 2;
  mouseEl.style.setProperty('--x', x + 'px');
  mouseEl.style.setProperty('--y', y + 'px');
});
