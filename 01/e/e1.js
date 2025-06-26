let ID=100
let Name="Chan thida"
let Gender="male"
let HourWorked=500.00
let Rate=1.5
let Salary=HourWorked*Rate
let TaxRate=0.2
let TaxAmount=Salary*TaxRate/100
let totalSalary=Salary-TaxAmount
console.log("==========Employee Salary Report==========")
console.log(`ID           :${ID}`)
console.log(`Name         :${Name}`)
console.log(`Gender       :${Gender}`)
console.log(`Hour Work    :${HourWorked} hrs`)
console.log(`Rate/Hour    :$${Rate}`)
console.log("------------------------------------------")
console.log(`Salary       :$${Salary.toFixed(2)}`)
console.log(`Tax Rate     :${TaxRate}%`)
console.log(`Tax Amount   :$${TaxAmount}`)
console.log(`Total Salary :${totalSalary}`)
console.log("==========================================")
