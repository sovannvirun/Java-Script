
const container  = document.getElementById('container');
function display(datas){
    const html = datas.map((data) => {
        return ` <div class="box">
                    <h1>${data.title}</h1>
                    <p>${data.body}</p>
                </div>
            `
    }).join("");
    container.innerHTML = html;
}



async function fetchData() {
    const respone = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await respone.json();
    
    
        console.table(data)
        display(data);
   
}

fetchData();