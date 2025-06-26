function showMessage(names){
    if(!names){
        console.log(`Hello there`)
    }
    else{
        console.log(`Hello${names}`)
    }
}
showMessage();
let names="Apple"
showMessage(names);