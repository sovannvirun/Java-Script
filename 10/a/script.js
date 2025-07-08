

setTimeout(() =>{
    console.log("Hello time out !!");
},1000)

//setInterval


// let id = setInterval(() =>{
//     console.log("Hello interval")
// },1000);
let id = setInterval(display,1000);


function display(){
    console.log("hello");
}
function stopInterval(){
    clearInterval(id);
}





