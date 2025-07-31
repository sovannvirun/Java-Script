export let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

export function saveData(){
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
}
