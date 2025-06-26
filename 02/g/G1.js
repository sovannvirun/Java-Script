let usekm=300;
let price;
let Home="Borey Phonsou";
let Name="Vichet"
if(usekm>200){
    price=700;
}
else if(usekm>150){
    price=600;
}
else if(usekm>100){
    price=500;
}
else if(usekm>50){
    price=400;
}
else if(usekm>1){
    price=350;
}
let use_cal=usekm*price;
console.log(`Use Cal:${use_cal}`)
console.log(`Home:${Home}`)
console.log(`Name:${Name}`)
