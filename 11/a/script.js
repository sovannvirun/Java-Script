const form  = document.getElementById('myform');
const username = document.getElementById('js-username');
const radioFemale = document.getElementById('js-female');
const radioMale = document.getElementById('js-male');
const shiftSelect = document.getElementById('js-shift');
const allcourse = document.querySelectorAll('.course-checkbox');


form.addEventListener('submit',(e) =>{
    e.preventDefault();

    //get gender
    let gender = '';
    if(radioFemale.checked){
        gender = 'Female';
    }
    else if(radioMale.checked){
        gender = 'Male';
    }
    else{
        gender = 'Null';
    }

    //shift select

    let shift = shiftSelect.value;

    //course checkbox
    let getCourse = []
    allcourse.forEach((course) =>{
        if(course.checked){
            getCourse.push(course.value);
        }
    })

    console.log(username.value)
    console.log(gender)
    console.log(shift)
    console.log(getCourse)
})