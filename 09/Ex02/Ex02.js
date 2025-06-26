const input_use=document.querySelector('input')
const Button_use=document.querySelector('button')
Button_use.addEventListener('click',()=>{
    const S_input_type=input_use.type
    console.log(S_input_type)
    if (S_input_type==="color"){
        input_use.type="file"
    }else{
        input_use.type="color"
    }
})