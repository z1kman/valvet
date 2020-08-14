
function OnClickMenu(btn){
    let Menu = document.getElementById("Menu-Mobile");
    let ico = document.getElementById("Menu-ico");
    if (btn.classList.contains('Menu-Exit')) {
        Menu.style.visibility = 'hidden';
        ico.style.visibility = 'visible';
    } else {
        Menu.style.visibility = 'visible ';
        ico.style.visibility = 'hidden';
    }
}