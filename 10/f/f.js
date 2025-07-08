const add = document.querySelector('.add-button');
const remove = document.querySelector('.remove-button');

let messages = 2;

add.addEventListener('click',()=>{
    messages = messages + 1;
})
remove.addEventListener('click', () => {
    messages = messages - 1;
})

let timeid = setInterval(()=>{
    if(messages > 0){
         document.title = `(${messages})new messages`;
    }
    else{
       
        document.title = 'app'
    }
   
},100)