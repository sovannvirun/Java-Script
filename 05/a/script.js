let myCode = [1001,1002,100, 1006, 1009,2000,6000]
let ProductLists = [
    {
        id : 1,
        name : "Coca",
        price : 5.5
    },
    {
        id : 2,
        name : "fanta",
        price : 6.6
    },
    {
        id : 3,
        name : "sting",
        price : 7.7
    }
]
console.log(myCode)
console.log(myCode.length)
lastIndex = myCode.length-1
console.log(myCode[lastIndex])
let newCode = 4000;
myCode.push(newCode)
console.log("After push : ")
console.log(myCode)

myfilterData = myCode.filter((code) => code % 4 === 0);
console.log(myfilterData)

myFinddata = myCode.find((code) => code === 1001)
console.log(myFinddata)

myCode.splice(3,1)//use for delete item in array (delete at index 3)
console.log(myCode)
// console.log(ProductLists)
// console.log(ProductLists[1])//show product at index 1, 
let findPro = ProductLists.find((pro) => pro.price > 5)
console.log(findPro)
let filterPro = ProductLists.filter((pro) => pro.price > 6)
console.log(filterPro)
;
console.log(ProductLists.reverse())