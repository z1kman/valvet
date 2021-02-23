window.onload = function () {
    GetContent();
}
window.onresize = function (event) {
    checkResizeWindow(window.innerWidth);
};

function OnClickMenu(btn) {
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

function checkResizeWindow(width) {
    let Menu = document.getElementById("Menu-Mobile");
    let orientation =  window.screen.orientation;
    let ico = document.getElementById("Menu-ico");

    if (width > 1080 && orientation.type == 'landscape-primary') {
        Menu.style.visibility = 'hidden';
        ico.style.visibility = 'visible';
    } else if (width <= 1080 || orientation === 'portrait-primary') {
    
 
    }

}

function GetContent() {
    let list = document.getElementById('container');
    content.map(function (elem) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let divName = document.createElement('div');
        let firstName = document.createElement('div');
        let lastName = document.createElement('div');

        li.className = 'Container__Item';
        img.src = elem.src;
        divName.className = 'Name';
        firstName.className = 'Name__First-Name';
        lastName.className = 'Name__Last-Name';

        lastName.innerText = elem.last_name;
        firstName.innerText = elem.first_name;

        divName.appendChild(firstName);
        divName.appendChild(lastName);

        li.appendChild(img);
        li.appendChild(divName);

        list.appendChild(li);


    })



}