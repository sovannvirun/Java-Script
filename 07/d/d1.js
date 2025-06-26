const search = document.querySelector(".search_bar")
const summit=document.querySelector(".summit")
const message=document.querySelector(".message")


//a.
// summit.addEventListener("click",()=>{
//     console.log(search.value)
//     message.innerHTML=search.value
// })

//b.
search.addEventListener("keydown",(event)=>{
    if(event.key == 'Enter'){
        message.innerHTML=search.value
    }
})