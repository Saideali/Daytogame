var menu = document.querySelector('head nav')
var menubtn = document.querySelector('#menu-btn')
function menushow(){
    //window.alert('tudo ok')
    if(menu.classList.contains('open')){
        menu.classList.remove('open')
    }else{
        menu.classList.add('open')
    }
}