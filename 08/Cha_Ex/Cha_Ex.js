const openModel=document.querySelector(".buttonModel")
const modelHeader=document.querySelector(".box")
const x=document.querySelector(".x")
const overlay=document.querySelector(".overlay")
openModel.addEventListener("click",()=>{
    modelHeader.classList.add("active")
    console.log("click")
})
x.addEventListener("click",()=>{
    modelHeader.classList.remove("active")
})
overlay.addEventListener("click",()=>{
    modelHeader.classList.remove("active")
})