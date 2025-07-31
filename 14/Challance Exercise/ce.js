import {cart, saveData } from "./cart.js";

const products = [
  {
    id: 1,
    names: "Adidas Campus",
    image:
      "https://i.pinimg.com/736x/03/e5/d5/03e5d50ad0afdfdbae803d84a217f653.jpg",
    price: 100,
    color: "brown",
  },
  {
    id: 2,
    names: "PUMA Suede XL",
    image:
      "https://i.pinimg.com/736x/e2/a3/03/e2a303e84da9eca0a28d6db45ccc6552.jpg",
    price: 150,
    color: "green",
  },
  {
    id: 3,
    names: "Nike air",
    image:
      "https://i.pinimg.com/736x/32/39/93/3239930a292ec4a501c7865e88af36fc.jpg",
    price: 95,
    color: "white",
  },
  {
    id: 4,
    names: "Converse Chuck 70",
    image:
      "https://i.pinimg.com/736x/99/ec/61/99ec6168c0b8cbce642e024718cc6cc4.jpg",
    price: 100,
    color: "black",
  },
  {
    id: 5,
    names: "New Balance M's 990v6",
    image:
      "https://i.pinimg.com/736x/ee/de/3d/eede3d34e174364f9bcd3cef00d7d506.jpg",
    price: 85,
    color: "dark gray",
  },
  {
    id: 6,
    names: "adidas F50 Elite",
    image:
      "https://i.pinimg.com/736x/a1/2a/17/a12a17af9050ef47534343a4d119309c.jpg",
    price: 105,
    color: "white blue",
  },
  {
    id: 6,
    names: "Nike Air Zoom Mercurial Superfly IX",
    image:
      "https://i.pinimg.com/736x/7d/4e/64/7d4e64e84e24227653639e5b9305bcd0.jpg",
    price: 120,
    color: "pink",
  },
  {
    id: 7,
    names: "Puma Womens Ultra 5",
    image:
      "https://i.pinimg.com/736x/25/5e/5b/255e5b9bae3aa3d2c6ba951bd533184e.jpg",
    price: 120,
    color: "white",
  },
];
const productContain=document.querySelector(".products-containers")
function display(datas){
  const htmlContain=datas.map((data)=>{
    return`
      <div class="product-card">
        <img src="${data.image}" alt="">
        <div>
            <p class="color">${data.color}</p>
            <p class="product-name">${data.names}</p>
             <div class="Display">
                <P>${(data.price).toFixed(2)}$</P>
                <button onclick='AddToCart(${data.id})'>Add to Cart</button>                
             </div>
            
            
        </div>
        
    </div>
    `
  }).join("");
  productContain.innerHTML=htmlContain;

}
display(products);
window.AddToCart=function(id){
  console.log("add");
  console.log(id);
  let prevro=cart.find((pro)=>
    pro.id===id
  )
  if (prevro){
    prevro.qty+=1;
  }
  else{
    let product=products.find((pro)=>
      pro.id===id
    )
    let newProduct={
      id:id,
      name:product.names,
      price:product.price,
      qty:1,
      img:product.image      
    }
    cart.push(newProduct);

  }
  saveData();
  console.log(cart)
  alert("Product have been add to cart!!")
}