const SumNumber = (x=1,y=1)=>{
    return x+y;
}
const calculSum = SumNumber(5)
console.log(calculSum)

//Functions
console.log("Version classique avec le mot-clé FUNCTION")
function AfficherDeuxValeurs(param1,param2=30){
    if(param1)
    {
        return param1 + " -- " + param2

    }
    return "Il y'a un problème avec les paramètres recus"
}

const responseFunction = AfficherDeuxValeurs()
console.log(responseFunction)


//Fonction fléchée
console.log("Version Fonction fléchée")
const AfficherDeuxValeursF = (param1,param2=30)=>{
    if(param1)
    {
        return param1 + " -- " + param2

    }
    return "Il y'a un problème avec les paramètres recus"
}

const responseFunctionF = AfficherDeuxValeursF()
console.log(responseFunction)







/*const confirm = ()=>{
    return true;
}

const ask=(question, yes, no)=>{
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    ()=>{console.log('You agreed.');},
    ()=>{console.log('You canceled the execution')}
)*/

/*function confirm(){
    return true;
}

function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    ()=>{console.log('You agreed.');},
    ()=>{console.log('You canceled the execution')}
)*/