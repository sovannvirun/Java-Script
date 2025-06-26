let studentID="S12345";
    let StudentName="Jonh Doe";
    let htmlScore=85;
    let cssScore=92;
    let phpScore=55;
    let grade;
    let description;
    let totalScore=htmlScore+cssScore+phpScore
    let averageScore=totalScore/3;
    if(averageScore>90){
        grade="A";
        description="Excellent";
    }
    else if (averageScore>80){
        grade="B";
        description="Very Good";
    }
    else if (averageScore>70){
        grade="C";
        description="Good";
    }
    else if(averageScore>60){
        grade="D";
        description="Average"; 
    }
    else if(averageScore>=50){
    grade="E";
    description="Pass";
    }
    else{
        grade="F";
        description="Fail";
    }
    console.log(`Student ID:${studentID}`)
    console.log(`Student Name:${StudentName}`)
    console.log(`Total Score:${totalScore}`)
    console.log(`Average Score:${averageScore.toFixed(2)}`)
    console.log(`Grade:${grade}`)
    console.log(`Description:${description}`)

