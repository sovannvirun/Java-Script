function findgrade(total){
    if(total>=90){
        return "A"
    }
    else if (total>=80){
        return"B"
    } 
    else if (total>=70){
        return "C"
    }
    else if (total>=60){
        return "D"
    }
    else if (total>=50){
        return "E"
    }
    else{
        return"F"
    }
}
console.log(`Grade=${findgrade(100)}`)
console.log(`Grade=${findgrade(40)}`)