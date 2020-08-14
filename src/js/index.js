
function OnClickMenu(btn){
    let Menu = document.getElementById("Menu-Mobile");
    btn.classList.contains('Menu-Exit') ? Menu.style.visibility = 'hidden' : Menu.style.visibility = 'visible ' ;
}