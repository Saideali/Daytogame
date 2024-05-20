var menu = document.querySelector('#menu')
var menubtn = document.querySelector('#menu-btn')
function menushow(){
    if(menu.classList.contains('open')){
        menu.classList.remove('open')
    }else{
        menu.classList.add('open')
    }
}