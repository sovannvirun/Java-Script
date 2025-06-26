let studentID="MA10-045";
let studentName="Sovann Virun";
let htmlscore=85;
let cssscore=92;
let phpscore=55;
let grade;
let description;
let totalscore=htmlscore+cssscore+phpscore;
let averagescore=totalscore/3;
if(averagescore>90){
    grade="A";
    description="Excellant";
}
else if(averagescore>80){
    grade="B";
    description="Very Good";
}
else if(averagescore>70){
    grade="C";
    description="Good";
}
else if (averagescore>60){
    grade="D";
    description="Average";
}
else if(averagescore>=50){
    grade="E";
    description="Pass";
}
else{
    grade="F";
    description="Fail";
}
console.log(`Student ID:${studentID}`)
console.log(`Studen Name:${studentName}`)
console.log(`Total Score:${totalscore}`)
console.log(`Average Score:${averagescore.toFixed(2)}`)
console.log(`Grade:${grade}`)
console.log(`Description:${description}`)


