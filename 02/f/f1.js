let ID="50";
let Name="Mr.Sovann Virun";
let Gender="Male";
let tax_rate;
let deduction;
let Cross_Salary=9000000;
if(Cross_Salary>12500000){
    tax_rate=20;
    deduction=70000;
}
else if(Cross_Salary>8500000){
    tax_rate=15;
    deduction=60000;
}
else if(Cross_Salary>2000000){
    tax_rate=10;
    deduction=55000;
}
else if(Cross_Salary>1500000){
    tax_rate=5;
    deduction=45000;
}
else{
    tax_rate=0;
    deduction=0;
}
let Tax_Pay=(Cross_Salary*tax_rate/100)-deduction
let Net_Salary=Cross_Salary-Tax_Pay
console.log(`Net Salary:${Net_Salary}`)