
setInterval(()=>{
    
    if(document.title === 'app'){
        document.title = 'new messages';
    }
    else{
        document.title = 'app';
    }
},1000)