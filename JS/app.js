const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const myNode = document.querySelectorAll('.myNode');

window.addEventListener('scroll',()=>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY>0)
})


menuToggle.addEventListener('click',()=>{
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active')
});

for (let i = 0; i < myNode.length; i++) {
    myNode[i].addEventListener('click',()=>{
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
     })
}