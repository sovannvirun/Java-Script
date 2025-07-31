import { cart,saveData } from "./cart.js";
console.log(cart);
const containers=document.querySelector(".checkout-container");
function display(datas){
    const html=datas.map((data,index)=>{
        return`
        <div class = "card" >
                <div>
                <img src=${data.img} alt="">
                <div>
                    <p>${data.name}</p>
                    <p>${data.price}</p>
                    <p>${data.qty}</p>
                </div>
                <div>
                    <button onclick = 'remove(${index})'>remove</button>
                </div>
            </div>

        </div>
        `
    }).join("");
    containers.innerHTML=html;
}
display(cart);
window.remove=function(index){
    cart.splice(index,1);
    console.log("click");
    console.log(cart)
    saveData();
    display(cart)
}