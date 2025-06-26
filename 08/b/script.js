//class list: toggle, contains, add, remove

const button = document.querySelector("button");
const displays = document.querySelector("p");

button.addEventListener("click", () => {
    displays.classList.toggle('active')
    button.classList.toggle('buttonActive')
})