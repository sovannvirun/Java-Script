
const container  = document.getElementById('container');


const search = document.querySelector('input');
const add_button = document.querySelector('button');

async function fetchData(id) {
    const respone = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await respone.json();
    console.log(data);

    container.innerHTML = `
            <div class="box">

                    <p>#${data.id}</p>
                    <h1>${data.title}</h1>
                    <p>${data.body}</p>
                </div>
    `;
}


add_button.addEventListener("click",()=>{
    fetchData(search.value)
});