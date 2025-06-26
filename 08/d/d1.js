const home=document.querySelector(".home1");
const about=document.querySelector(".about1");
const contact=document.querySelector(".contact1")
home.addEventListener("click",()=>{
    home.classList.toggle('active')
})
about.addEventListener("click",()=>{
    about.classList.toggle('active')
})
contact.addEventListener("click",()=>{
    contact.classList.toggle('active')
})