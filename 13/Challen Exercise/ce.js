const Input_AT=document.getElementById("AUTHOR")
const Input_TT=document.getElementById("TITLE")
const Input_NOP=document.getElementById("NOP")
const AddBook=document.querySelector(".AddBook")
const container=document.getElementById("js_container")
let list=[];
AddBook.addEventListener(("click"),()=>{
    let NewList={
        author:Input_AT.value,
        title:Input_TT.value,
        number_of_page:Input_NOP.value,
    }
    list.push(NewList)
    saveData();
    getData()
    display(list)
})
function display(data){
    let html=data.map((d,index)=>{
        return`
    <div class="contain_header">
        <P> ${d.author} </P>
        <p> ${d.title} </p>
        <p> ${d.number_of_page} </p>
        <button class="Remove" onclick='Remove( ${index} )'>Remove</button>
    </div>
        `
    }).join("")
    container.innerHTML=html

}
function Remove(index){
    list.splice(index,1)
    saveData();
    getData();
    display(list)
}
function saveData(){
    localStorage.setItem("library_store",JSON.stringify(list));
}
function getData(){
    const person=localStorage.getItem("library_store");
    if(person){
        list=JSON.parse(person);    
    }
    else{
        list=[];
    }
    
}
getData();
display(list)