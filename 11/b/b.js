const text_box=document.querySelector(".text_box")
const date=document.querySelector(".date")
const summit =document.querySelector(".summit")
let TodoList=[];
summit.addEventListener(("click"),()=>{
    let todo={
        text:text_box.value,
        date:date.value
    }
    TodoList.push(todo)
    console.table(TodoList)
})