let productlist=[
    {
        code:1,
        name:"T-Shirt",
        price:25,
        discount:20,
    },
    {
        code:2,
        name:"Jeans",
        price:30,
    },
    {
        code:4,
        name:"T-Shirt",
        price:25,
        discount:10,
    }
];
console.log(productlist)
let filterpro=productlist.filter((pro)=>pro.discount>0)
console.log(filterpro)
