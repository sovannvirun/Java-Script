const InputText=document.getElementById('text')
const InputDate=document.getElementById('date')
const AddTask=document.querySelector('.AddTask')
const container=document.querySelector('.container')

let ToDoList=[];
AddTask.addEventListener('click',()=>{
    let ToDo={
        text:InputText.value,
        date:InputDate.value
    };
    ToDoList.push(ToDo);
    saveData();
    getData();
    display(ToDoList)    
});
getData();
display(ToDoList);

function saveData(){
    localStorage.setItem("ToDoStorage", JSON.stringify(ToDoList));
}
function getData(){
    const person =localStorage.getItem("ToDoStorage");
    if(person){
        ToDoList=JSON.parse(person);
    }
    else{
        ToDoList=[];
    }
}
function display(data){
    const html=data.map((d,index) => {
        return`
        <div>
                <h2>${d.text}</h2>
                <p>${d.date}</p>
                <button onclick='remove(${index})'>remove</button>
            </div>
        `
    
    }).join("");
    container.innerHTML=html;
}
function remove(index){
    ToDoList.splice(index,1);
    saveData();
    display(ToDoList);
}
