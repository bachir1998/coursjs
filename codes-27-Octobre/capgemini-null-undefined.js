console.log("On est Jeudi")

let Variable = 0
let maVariable = null
let maVariableUndefined
console.log(typeof maVariable) // bug JS

if(maVariable == null){
    console.log("Je suis null")
}

if(maVariableUndefined == undefined){
    console.log("Je suis Undefined")
}

if(Variable || Variable == 0){
    console.log("Je rentre dans la condition")
}