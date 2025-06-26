const displays = document.querySelector("input");

function getValue(key){
    console.log("Hello")
    displays.value = displays.value + key;
}
function clearData(){
    displays.value = "";
}
function percent(){
    displays.value = eval(displays.value)/100;
}
function result(){
    var current = displays.value;
    var last = current[current.length - 1];
    if(last ==="*"||last==="/"||last ==="+"||last==="-"){
        displays.value = "Error";
    }
    else{
       displays.value = eval(displays.value);
    }
    
}