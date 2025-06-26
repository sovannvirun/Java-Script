let Code=1
let Product="T-shirt"
let Price=20.50
let Quantity=10
let Total=Quantity*Price
let Discount=20
let Savings=Total*Discount/100
let Payment=Total-Savings
console.log("==========Product Invice=============")
console.log(`Code   :${Code}`)
console.log(`Product:${Product}`)
console.log(`Price  :$${Price.toFixed(2)}`)
console.log("------------------------")
console.log(`Total  :${Total.toFixed(2)}`)
console.log(`Discount:${Discount}%`)
console.log(`Saving  :$${Savings}`)
console.log(`Payment  :$${Payment.toFixed(2)}`)
console.log("====================================")
