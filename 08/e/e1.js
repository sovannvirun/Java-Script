const number=document.querySelector(".number")
const Calculator=document.querySelector(".calculate")
const showgrade=document.querySelector(".showgrade")
Calculator.addEventListener("click",()=>{
    console.log(number.value)
    let grade=''
    let score=number.value
    if(score<0){
        showgrade.classList.add('active')
    }
})