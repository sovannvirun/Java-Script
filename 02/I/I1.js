let ID="S12345";
let Name="Jonh Doe";
let html_score=85;
let css_score=92;
let php_score=55;
let grade;
let descrition;
let total_score=html_score+css_score+php_score;
let average=total_score/3;
if (average>90){
    grade="A";
    descrition="Excellent";
}
else if(average>80){
    grade="B";
    descrition="Very Good";
}
else if(average>70){
    grade="C";
    descrition="Good";
}
else if (average>60){
    grade="D";
    descrition="Average";
}
else if(average>50){
    grade="E";
    descrition="pass";
}
else{
    grade="F";
    descrition="Fail"
}
console.log(`Average:${average.toFixed(2)}`)
console.log(`Grade:${grade}`)
console.log(`Desrition=${descrition}`)
console.log(`Student ID:${ID}`)
console.log(`Student Name:${Name}`)