let cross_salary=13000000;
let tax_rate;
let dedution;
let Staff_ID="A000005";
let Staff_Name="Chantha Vitou";
let Sex="Male"
if (cross_salary>12500000){
    tax_rate=20;
    dedution=70000;
}
else if(cross_salary>8500000){
    tax_rate=15;
    dedution=60000;
}
else if(cross_salary>2000000){
    tax_rate=10;
    dedution=55000;
}
else if(cross_salary>1500000){
    tax_rate=5;
    dedution=45000;
}
else{
    tax_rate=0;
    dedution=0;
}
let amount_dedution=cross_salary*tax_rate/100+dedution
let Net_Salary=cross_salary-amount_dedution
console.log(`Net Salary:${Net_Salary}`)
console.log(`Staff ID:${Staff_ID}`)
console.log(`Staff Name:${Staff_Name}`)
console.log(`Sex:${Sex}`)
