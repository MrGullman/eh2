const asideMenu = document.getElementById('asideMenu');
const menuBtn = document.getElementById('menuBtn');
const appContainer = document.getElementById('app-container');
const bar = document.querySelectorAll('.bar');

menuBtn.addEventListener('click', ()=>{
  asideMenu.classList.toggle('open');
  appContainer.classList.toggle('app-stop-scrolling');

  bar.forEach(function(item){
    item.classList.toggle('close');
  })
  // console.log(bar);

})
