

// localStorage.setItem("Id","001");
// localStorage.setItem("Name","Chan Dara");



// const id = localStorage.getItem(id);
// const Name = localStorage.getItem(Name);

// console.log(id)
// console.log(Name);


const TxtEmail = document.getElementById('js-email');
const TxtUsername = document.getElementById('js-name');
const container = document.querySelector('.container');
const addButton = document.querySelector('.add-button');

let personList = [];

addButton.addEventListener('click', () =>{
    let newPerson = {
        username : TxtUsername.value,
        email  : TxtEmail.value
    };

    personList.push(newPerson);
    saveData();
    getData();
    display(personList)
});
getData();
display(personList);

function saveData(){
    localStorage.setItem("PersonStorage", JSON.stringify(personList));
}

function getData(){
    const person = localStorage.getItem("PersonStorage");
    if(person){
        personList = JSON.parse(person);
    }
    else{
        personList = [];
    }
}

function display(data){
    const html = data.map((d,index) => {
        return `
            <div>
                <h1>${d.username}</h1>
                <p>${d.email}</p>
                <button onclick='remove(${index})'>remove</button>
            </div>
        `
    }).join("");
    container.innerHTML = html;

}

function remove(index){
    personList.splice(index,1);
    saveData();
    display(personList);
}

