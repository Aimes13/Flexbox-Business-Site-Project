const menuClick = document.getElementById('menuButton');
const menuList = document.getElementById('menu');

menuList.addEventListener('click', () => {
  menuList.style.display = 'none';
});

menuClick.addEventListener('click', () => {
  menuList.style.display = 'block';
})
