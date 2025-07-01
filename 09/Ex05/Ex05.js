const Buttons = document.querySelectorAll('.tab-button');

Buttons.forEach((btn) => {
    btn.addEventListener('click', () =>{
        const id = btn.dataset.id;
        console.log(id);
    })
})