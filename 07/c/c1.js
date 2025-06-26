const headsbutton=document.querySelector('.heads')
const tailsbutton=document.querySelector('.tails')
const message=document.querySelector('.message')
headsbutton.addEventListener("click",()=>{
    message.innerHTML="You Chose : head"    
    console.log(`You have been click head button`)

})
tailsbutton.addEventListener("click",()=>{
    message.innerHTML="You Chose : tails"
    console.log(`you have been click tails button`)
})