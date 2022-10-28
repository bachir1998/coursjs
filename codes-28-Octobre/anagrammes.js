const Anagrammes = (param1='ab', param2)=>{
    if( (param1.length==param2.length)  && param1 && param2)
    {
        if(param1.split("").sort().join('')==param2.split("").sort().join(''))
         console.log(param1+" et "+param2+" sont des anagrammes")
         else
         console.log(param1+" et "+param2+" ne sont pas des anagrammes")
    }
    else{
        console.log('Vos deux mots ne sont pas des anagrammes')
    } 
}
Anagrammes('face','cafe')
