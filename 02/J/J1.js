let total=600;
let discount;
if(total>500){
    discount=20;
}
else if(total>400){
    discount=15
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
let payment=total-total*discount/100
console.log(`Payment:${payment}`)