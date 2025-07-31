const filterButton=document.querySelectorAll("button");
const container=document.getElementById('container')
function display (datas){
    const html= datas.map((data)=>{
        return`
    <div class="card">
        <img src= ${data.strMealThumb} alt="">
        <h2> ${data.strMeal}</h2>
    </div>
        `
    }).join("");
    container.innerHTML=html;
}

async function fetchData(id) {
    container.innerHTML="<p>Loading food.......</p>"
     const respone = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    const data = await respone.json();
    display(data.meals)
    console.log(data);
}
filterButton.forEach(button => {
    button.addEventListener('click',()=>{
        const id=button.dataset.id;
        console.log(id)
        fetchData(id)
    })
});
