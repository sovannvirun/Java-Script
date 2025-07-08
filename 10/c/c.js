const clik_change=document.querySelector(".Finish")
clik_change.addEventListener(('click'),()=>{
    clik_change.innerHTML='loading';
    setTimeout(() => {
        clik_change.innerHTML='Finished'
    }, 2000);
})