// search box open
const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
searchBtn.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    searchInput.focus();

    console.log('hello')
})

// seach box end


const loader = document.getElementById('preloader');

window.addEventListener('load', function(){
    loader.style.display = 'none';
})


// load animation
// var i = 0;
// var txt = 'Chào mừng đến với Blog Mèo Không Đen';
// var speed = 400;

// function typeWriter() {
//     if (i < txt.length) {
//         document.querySelector(".slide__title h1").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//       }
// }

// typeWriter();

// open content item

var OpenItemBtn = document.querySelector('.content__more');
var contentItem = document.querySelector('.content__item.hidden')

console.log(contentItem)

OpenItemBtn.addEventListener('click', function(){
    console.log('hêlo')
    contentItem.classList.remove('hidden')
    OpenItemBtn.classList.add('hidden')
    
})
