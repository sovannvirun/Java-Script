let count=15;
const display=document.querySelector(".c_count")
let id=setInterval(()=>{
    count=count-1
    console.log(count)
    display.innerHTML=`Count : ${count}`
    if(count===0){
        clearInterval(id)
        display.innerHTML="Happy New Year"

    }
},1000)