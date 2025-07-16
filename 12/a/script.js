const products = [
    {
        id : 1,
        name : "Coca",
        price : 1.5,
        image : "https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-original/en_coca-cola-original-taste-20-oz_750x750_v1.jpg",
        category : "drink"
    },
    {
        id : 2,
        name : "Khmer food",
        price : 5,
        image : "https://images.deliveryhero.io/image/fd-kh/products/1090479.jpg?width=%s",
        category : "food"
    },
    {
        id : 3,
        name : "Sting",
        price : 1,
        image : "https://5.imimg.com/data5/SELLER/Default/2021/5/GA/QN/UA/107425127/250ml-sting-energy-drink.jpg",
        category : "drink"

    },
    {
        id : 4,
        name : "Hamburger",
        price : 1.5,
        image : "https://www.primaverakitchen.com/wp-content/uploads/2024/08/Hamburger-Recipe-7.jpg",
        category : "snaks"

    },
    {
        id : 5,
        name : "IDOL",
        price : 1.5,
        image : "https://admin.idoldrinks.com/api/idol/web/image/0000710",
        category : "drink"

    }

]


const productContain = document.querySelector(".products-containers")
const filterButton = document.querySelectorAll(".filter-button");

function display(datas){
   const htmlContain =  datas.map((data) =>{
        return `
            <div class="product-card">
                <img src=${data.image} alt="">
                <div>
                    <p class="product-name">${data.name}</p>
                    <p>${(data.price).toFixed(2)}$</p>
                </div>
            </div>
        `
    }).join("");
    productContain.innerHTML  = htmlContain;
    console.log(htmlContain);
}


display(products);


filterButton.forEach((button) =>{
    button.addEventListener("click",()=>{
        const categoryId = button.dataset.category;
        console.log(categoryId);
        filterButton.forEach((btn)=>btn.classList.remove("active"))
        button.classList.add("active")

        //if button have gategoryid === all display all products
        if(categoryId === "All"){
            display(products);
        }
        else{
            const filterData = products.filter((pro) => pro.category === categoryId);
            console.log(filterData);

            display(filterData)
        }
    });
})