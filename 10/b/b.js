const changeBtn=document.querySelector(".Finish")
changeBtn.addEventListener(('click'),()=>{
    setTimeout(()=>{
       changeBtn.innerHTML='Finished';
    },1000)
})
