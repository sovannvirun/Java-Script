const decrease_button=document.querySelector(".DC")
const reset_button=document.querySelector(".RS")
const increase_button=document.querySelector(".IC")
const Zero=document.querySelector(".Zero")
let Counter=0;
decrease_button.addEventListener("click",()=>{
    Counter=Counter-1
    Zero.innerHTML=Counter
})
increase_button.addEventListener("click",()=>{
    Counter=Counter+1
    Zero.innerHTML=Counter
})
reset_button.addEventListener("click",()=>{
    Counter=0
    Zero.innerHTML=Counter
})