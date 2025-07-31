const container = document.getElementById('container');
const filter_button = document.querySelectorAll('.button_filter');
function display(datas){
    const html=datas.map((data,index)=>{
        reture`
            <div class="card">
            <img class="photo" src= ${data.img} alt="">
            <p class="puma">${data.brand}</p>
            <p class="PV">${data.title}</p>
            <p class="price">${(data.salePrice/100).toFixed(2)}</p>
            <button>Add To Cart</button> 
        </div>
        `
    }).join("");
    container.innerHTML=html;
    }
    async function fetchData() {
        const respone = await fetch(`./products.json`)
        const data = await respone.json();
        display(data)
        console.log(data)
}
