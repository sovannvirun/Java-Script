
//selector
const Header = document.getElementById('header');
const Button = document.querySelector('button');
const Addbutton = document.querySelector('#add-button')
const Message = document.querySelector(".message");

console.log(Header)
console.log(Button)
console.log(Addbutton)

//change html element
let mycontent = 'This is paragraph'
Header.innerHTML = mycontent
Button.innerHTML = 'Clicked'


//event listenter
function showMessage(message){
    Message.innerHTML = message;
}
Addbutton.addEventListener('click', () => {
   Message.innerHTML = '<a href="">hello javascript</a>';
   Addbutton.innerHTML = 'Added';
});





const submit_button = document.querySelector('.submit-button');
const message2 = document.querySelector(".message2")
const textBox = document.querySelector("input")
submit_button.addEventListener('click', () =>{
    message2.innerHTML = textBox.value;
})