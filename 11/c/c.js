const UserName=document.querySelector(".Username")
const phone=document.querySelector(".PhoneNumber")
const radioFemale = document.getElementById('radioMale');
const radioMale = document.getElementById('radioFemale');
const ClassRoom=document.querySelector(".box_select")
const Address=document.querySelector(".address")
const summit=document.querySelector(".summit")
let TodoList=[];
summit.addEventListener(("click"),()=>{
    let gender = "";
    if(radioFemale.checked){
        gender = "Female";
    }
    else if(radioMale.checked){
        gender = "Male";
    }
    else{
        gender = "No type"
    }
    let todo={
        text1:UserName.value,
        text2:phone.value,
        text3:gender,
        text4:ClassRoom.value,
        text5:Address.value,
      
    }
    TodoList.push(todo)
    console.table(TodoList)
})