'use strict';
const iconMenu = document.getElementById('icon_menu');
const removeMenu = document.querySelector('.remove');
const headerOptions = document.querySelector('.header_options');

iconMenu.addEventListener('click', function(){
    headerOptions.classList.toggle('show');
});
removeMenu.addEventListener('click', function(){
    headerOptions.classList.remove('show');
})