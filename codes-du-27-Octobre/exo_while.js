let nombre = 200;
let i=1;

while(i<200)
{
    if((i%3==0) && (i%5==0)){
       console.log("Coucou Hello ")
       
    }
    else if(i%3==0){
        console.log("Coucou")
    }
    else if(i%5==0){
        console.log("Hello ")
    }
    else{
        console.log(i);

    }
    i++;
}
