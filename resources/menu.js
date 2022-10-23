const menuClick = document.getElementById('menuButton');
const menuList = document.getElementById('menu');

function myFunction() {
    menuList.classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropmenu')) {
        var dropdowns = menuList;
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}