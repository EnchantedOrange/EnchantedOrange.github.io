const openMenu = document.getElementsByClassName('open-menu')[0];
const menu = document.getElementsByClassName('menu')[0];
const red = document.getElementsByClassName('red')[0];
const green = document.getElementsByClassName('green')[0];
const required = Array.from(document.getElementsByClassName('required'));
const optional = Array.from(document.getElementsByClassName('optional'));

red.addEventListener('click', function() {
    this.classList.toggle('pressed-color-button');
    required.forEach(function (e) {
        e.parentElement.style.boxShadow = e.parentElement.style.boxShadow !== '' ?
        '' : '0 0 10px 5px #ff5956';
    });;
});

green.addEventListener('click', function() {
    this.classList.toggle('pressed-color-button');
    optional.forEach(function (e) {
        e.parentElement.style.boxShadow = e.parentElement.style.boxShadow !== '' ?
        '' : '0 0 10px 5px #48b847';
    });;
});