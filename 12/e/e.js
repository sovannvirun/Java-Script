const data = [
  {
    id: 11,
    image:
      "https://i.pinimg.com/736x/a0/c1/45/a0c1451ef3f083e0b55da19285a2b4d5.jpg",

    names: "Iphone 16",
    rate: "./rating/45.png",
    price: 95900,
    brand: "apple",
    color: "pink",
    category: "phone",
  },
  {
    id: 10,
    image:
      "https://i.pinimg.com/736x/61/30/f0/6130f04bf5195db53f5ce0744da9fc73.jpg",
    names: "MacBook Pro 14",
    rate: "./rating/45.png",
    price: 159900,
    color: "black",
    brand: "apple",
    category: "computer",
  },
  {
    id: 9,
    image:
      "https://image-us.samsung.com/SamsungUS/home/my-assets/09192024/1_Tab_S10_Plus_Platinum_Silver_Combo_Gallery-1600x1200.jpg?$product-details-jpg$",
    names: "Galaxy Tab S10+",
    rate: "./rating/45.png",
    price: 84900,
    prevPrice: 101880, // 20% markup
    color: "silver",
    brand: "samsung",
    category: "tablets",
  },
  {
    id: 8,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDP3?wid=532&hei=582&fmt=png-alpha&.v=1664481446939",
    names: "Magic Keyboard iPad(10th)",
    rate: "./rating/40.png",
    price: 24900,
    // 15% markup
    color: "white",
    brand: "apple",
    category: "accessories",
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/736x/b2/8f/93/b28f9355678b1a85c82966ac3ba6cac3.jpg",
    names: "ASUS VZ239H-W 23",
    rate: "./rating/40.png",
    price: 8999,
    // 15% markup
    brand: "asus",
    color: "white",
    category: "computer",
  },
  {
    id: 6,
    image:
      "https://www.ais.th/content/dam/ais/consumer/store/devices/oppo/tablet/pad-air-wifi-128-gb/oppo-pad-air-128-gb.png",
    names: "OPPO Pad Air",
    rate: "./rating/45.png",
    price: 26900,
    prevPrice: 32280, // 20% markup
    color: "blue",
    brand: "oppo",
    category: "tablets",
  },
  {
    id: 5,
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S068d7addc5bf47e0a3e053fb0a66de32z.png_960x960.png_.avif",
    names: "HUAWEI FreeLace Pro 2",
    rate: "./rating/35.png",
    price: 7745,
    // 15% markup
    color: "green",
    brand: "huawei",
    category: "accessories",
  },
  {
    id: 4,
    image: "https://media.currys.biz/i/currysprod/10270696?$l-large$&fmt=auto",
    names: "Galaxy Book5 Pro 360",
    rate: "./rating/45.png",
    price: 169999,
    prevPrice: 203999, // 20% markup
    color: "silver",
    brand: "samsung",
    category: "computer",
  },
  {
    id: 3,
    image:
      "https://www.spark.co.nz/content/dam/spark/images/product-images/devices/phones/oppo/oppo-find-x8-pro/oppo_find_x8_pro_white_1.png",
    names: "OPPO Find X8 Pro",
    rate: "./rating/45.png",
    price: 88900,
    // 20% markup
    color: "blue",
    brand: "oppo",
    category: "phone",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/c2/89/1c/c2891cc37158e623096c52da202a6e07.jpg",
    names: "Gaming Monitor MSI 27-2K",
    rate: "./rating/35.png",
    price: 21999,
    // 15% markup
    brand: "msi",
    category: "computer",
  },
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/dd/9d/2d/dd9d2d44ee58fdf9304a2e89cefb742f.jpg",
    names: "IPad Pro 13-Inch M4",// ipad pro 13-inch m4
    rate: "./rating/40.png",
    price: 114899,
    prevPrice: 137879, // 20% markup
    brand: "apple",
    category: "tablets",
  },
];
const filterButton=document.querySelectorAll(".filter-button")
const search=document.querySelector(".search")
const productContain=document.querySelector(".products-containers")
function display(datas){
  const HTML=datas.map((data)=>{
    return`
    <div class="product-card">
                <img src=${data.image} alt="">
                <div>
                    <p class="product-name">${data.names}</p>
                    <div>
                        ${data.prevPrice > 0 ? `<span class= "prevPrice">${(data.prevPrice/100).toFixed(2)}$</span>`: ""}
                        <span>${(data.price/100).toFixed(2)}$</span>
                    </div>
                </div>
            </div>
    `
  }).join("");
  productContain.innerHTML=HTML;
}

display(data);

filterButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        const categoryID=button.dataset.category;
        console.log(categoryID)
        filterButton.forEach((bts)=>bts.classList.remove("active"));
        button.classList.add("active")
        if(categoryID==="All"){
            display(data);
        }
        else{
            const filterData=data.filter((pro)=>pro.category===categoryID);
            console.log(filterData);
            display(filterData)
        }
    })
})


search.addEventListener('keyup', (e)=>{
  let searchData = e.target.value.toLowerCase();
  console.log(searchData);

  const filterProducts = data.filter((pro) => pro.names.toLowerCase().includes(searchData) || pro.brand.toLowerCase().includes(searchData) || pro.category.toLowerCase().includes(searchData));
  console.table(filterProducts);

  display(filterProducts);

})