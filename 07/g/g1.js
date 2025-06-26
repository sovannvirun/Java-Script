const showQty=document.querySelector(".showQty")
const addTocart=document.querySelector(".addToCart")
const PL2=document.querySelector(".PL2")
const PL5=document.querySelector(".PL5")
const PL10=document.querySelector(".PL10")
const M5=document.querySelector(".M5")
const M1=document.querySelector(".M1")
const rs=document.querySelector(".rs")
const qtys = document.querySelector(".qty")

let qty = 0;

addTocart.addEventListener("click", ()=>{
    qty = qty + 1;
})

showQty.addEventListener("click",()=>{
    console.log(qty);
    qtys.innerHTML=qty
})
PL2.addEventListener("click",()=>{
    qty=qty+2
})
PL5.addEventListener("click",()=>{
    qty=qty+5
})
PL10.addEventListener("click",()=>{
    qty=qty+10
})
M5.addEventListener("click",()=>{
    qty=qty-5
})
M1.addEventListener("click",()=>{
    qty=qty-1
})
rs.addEventListener("click",()=>{
    qty=qty*0
})