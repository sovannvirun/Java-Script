let code="C001";
let name="Shirt";
let qty=1;
let price=405;
let total=price*qty;
if (total>500){
    discount=20;
}else if(total>400){
    discount=15;
}
else if(total>300){
    discount=10;
}
else if(total>200){
    discount=5;
}
else if(total>0){
    discount=0;
}
let save=total*discount/100;
let payment=total-save;
console.log(`Total:${total}`)
console.log(`Save:${save}`)
console.log(`Payment:${payment}`)