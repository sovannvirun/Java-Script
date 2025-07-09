const submitButton = document.querySelector('button')
const username = document.getElementById('js-username');
const radioFemale = document.getElementById('js-female');
const radioMale = document.getElementById('js-male');
const shiftSelect = document.getElementById('js-shift');
const allcourse = document.querySelectorAll('.course-checkbox');
const display =  document.querySelector(".display")

submitButton.addEventListener('click',(e) =>{
    //get gender from radio button
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

    //get course from checkbox
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
    display.innerHTML = `
       <ul>
             <li>${username.value}</li>
        <li>${gender}</li>

        <li>${shift}</li>
        <li>${getCourse}</li>
       <ul>

    `
})