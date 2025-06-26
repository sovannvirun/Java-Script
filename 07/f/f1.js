const typing =document.querySelector(".input")
const SW = document.querySelector(".showWriting")
typing.addEventListener("keyup",()=>{
    SW.innerHTML=typing.value
})