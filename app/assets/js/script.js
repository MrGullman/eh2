const asideMenu = document.getElementById('asideMenu');
const menuBtn = document.getElementById('menuBtn');
const appContainer = document.getElementById('app-container');

menuBtn.addEventListener('click', ()=>{
  asideMenu.classList.toggle('open');
  appContainer.classList.toggle('app-stop-scrolling');
})
