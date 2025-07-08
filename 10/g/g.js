let Count=10
const display=document.querySelector(".C-count")

let id =setInterval(()=>{
    Count=Count-1
    console.log(Count)
    display.innerHTML=`Count : ${Count}`
    if (Count===0){
        display.innerHTML="Happy New Year";
        clearInterval(id)
    }
},1000)
