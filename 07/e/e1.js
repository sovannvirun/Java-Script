const number = document.querySelector(".number")
const Calculator = document.querySelector(".Calculate")
const showgrade = document.querySelector(".showgrade")
Calculator.addEventListener("click",()=>{
    console.log(number.value)
    let grade = ''
    let score=number.value
    if (score>90){
        grade="A"
    }
    showgrade.innerHTML=`You get ${grade}`
})