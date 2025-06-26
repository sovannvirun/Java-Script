let ID="Apple 01";
let Name="Apple USA";
let Gender="Female";
let CrossSalary=9000000
let deduction;
let tax_rate;
if (CrossSalary>1250000){
    tax_rate=20;
    deduction=70000;
}
else if(CrossSalary>8500000){
    tax_rate=15;
    deduction=60000;
}else if(CrossSalary>2000000){
    tax_rate=10;
    deduction=55000;
}
else if(CrossSalary>1500000){
    tax_rate=5;
    deduction=45000;
}
else{
    tax_rate=0;
    deduction=0;
}
let Net_Salary=(CrossSalary-deduction)-(CrossSalary*tax_rate/100)
console.log(`ID:${ID}`)
console.log(`Name:${Name}`)
console.log(`Net Salary:${Net_Salary}`)