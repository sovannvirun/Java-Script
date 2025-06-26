
//class list: toggle, contains, add, remove

const showBtn = document.querySelector('.show');
const hideBtn = document.querySelector('.hide');
const displays = document.querySelector('p');
let check;
showBtn.addEventListener('click', () => {
    displays.classList.add('active');
    check = displays.classList.contains('active')
console.log(check)
})
hideBtn.addEventListener('click', () =>{
    displays.classList.remove('active');
    check = displays.classList.contains('active')
console.log(check)
})

