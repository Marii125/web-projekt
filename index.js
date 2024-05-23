//hybani
const mouseEl = document.querySelector('.mouse');
const root = document.documentElement;

document.addEventListener('mousemove', (e) => {
  if (mouseEl !== null) {
    let x = -e.clientX / 2;
    let y = -e.clientY / 2;
    mouseEl.style.setProperty('--x', x + 'px');
    mouseEl.style.setProperty('--y', y + 'px');
  }
});

const menu = () => {
  const menuItems = document.querySelector('.mobile');
  menuItems.classList.toggle('show');
};

const lookingForButton = document
  .querySelector('.menu-hamburger')
  .addEventListener('click', menu);
