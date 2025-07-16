const InputText=document.getElementById('text')
const InputDate=document.getElementById('date')
const AddTask=document.querySelector('.AddTask')
const container=document.querySelector('.container')
const text1=document.getElementById('text1')
let ToDoList=[];
AddTask.addEventListener ('click',()=>{
    let ToDo={
        text:InputText.value,
        text2:text1.value,
        date:InputDate.value,
    }
    ToDoList.push(ToDo)
    saveData();
    getData();
    display(ToDoList)
    InputText.value = '';
    InputDate.value = '';
    text1.value = '';
});

getData();
display(ToDoList)


function display(data){
    const innerHTML=data.map((d,index)=>{
        return`
        <div class="display3">
            <div class="main"> ${d.text} </div>
            <div class="text2"> ${d.text2} </div>            
            <div class="display2">
                <div> ${d.date} </div>
                <button onclick='remove(${index})' class="remove">remove</button>
            </div>
        </div>
        `
    }).join("")
    container.innerHTML=innerHTML
}
function remove(index){
    ToDoList.splice(index,1);
    saveData();
    display(ToDoList);
}

function saveData(){
    localStorage.setItem("MeetingList", JSON.stringify(ToDoList));
}

function getData(){
    const meeting = localStorage.getItem("MeetingList");
    if(meeting){
        ToDoList = JSON.parse(meeting);
    }
    else{
        ToDoList = [];
    }
}