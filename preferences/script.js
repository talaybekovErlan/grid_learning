let themeBtn = document.querySelector('.footer__btn-theme');
let mainChats = document.querySelector('.main__chats');

themeBtn.onclick = function(){
    mainChats.classList.toggle('light-theme');
    
};