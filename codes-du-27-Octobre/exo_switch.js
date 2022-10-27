let i =1;
while(i<200)
{
    switch(true){   
        case (i%3==0 && i%5==0):
        console.log("Coucou Hello ")
        break;
    
        case (i%3==0):
        console.log("Coucou")
        break;
    
        case (i%5==0):
        console.log("Hello ")
        break;
        
        default:
        console.log(i)
        
        
    }
    i++

}
