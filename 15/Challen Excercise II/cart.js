export let cart = JSON.parse(localStorage.getItem("carts")) || [];
export function saveData(){
    localStorage.setItem("carts",JSON.stringify(cart));
}