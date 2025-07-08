const clickButton=document.querySelector(".atc")
const Message=document.querySelector(".message")
clickButton.addEventListener('click',()=>{
        Message.innerHTML='Added'
        setTimeout(() => {        
            Message.innerHTML=''
    }, 1000);
})
