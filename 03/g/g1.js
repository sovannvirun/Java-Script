let sum=0;
    for(let i=1;i<=10;i++)
    {
        if(i%2===0){
            console.log(i)
            sum=sum+i;
        }
    }
    console.log(`this is number sum:${sum}`);
    //i = 1; i<=10; true;
        //i % 2 === 0 ,false; i ++;
    //i = 2; i<=10; true;
        //i % 2 === 0, true;
        //sum = 0 + 2 = 2; i++;
    //i = 3; i<= 10; true;
        //i % 2 === 0; false; i++;
    //i = 4; i<=10; true;
        // i % 2 === 0; true;
        //sum = 2 + 4 = 6;
    //...