function exchangeMoney(money,from,to){
    if (from == "dollar" && to =="reil"){
        return money * 4000;
    }
    else if(from=="reil"&& to =="dollar"){
        return money /4000;
    }
    else if(from == "bath" && to =="reil"){
        return money * 119.414
    }
    else if(from == "reil"&& to == "bath"){
        return money/119.414;
    }
    else{
        return "No Exchange";
    }
}
console.log(exchangeMoney(4500,"reil","dollar"))
console.log(exchangeMoney(5,"dollar","reil"))
console.log(exchangeMoney(10,"bath","reil"))