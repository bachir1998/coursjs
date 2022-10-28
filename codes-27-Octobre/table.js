const passagers = ["Didier", "Daniel", "Sophie", "Denise"]
/*
//for of
console.log("------------------For of-----------------------")
for(let passager of passagers){
    console.log("Le passager est : "+passager)
}


//for in
console.log("------------------For in-----------------------")
for(let i in passagers){
    console.log("Le passager est : "+passagers[i])
}
passagers.forEach(elt =>console.log(" passager :  "+elt))


console.log("------------------For-----------------------")
for(let i=0;i<passagers.length;i++){
    console.log("Le passager est : "+passagers[i])
}

console.log("------------------Map-----------------------")
const passagersTransformes = passagers.map(
    passager => "Le passager est : "+passager
)
console.log(passagersTransformes)

//Faire comme avec map avec un forEach
console.log("---For each---")
const passagersTransformes2=[]
passagers.forEach(
    passager=>(passagersTransformes2.push("Le passager est : "+passager))
)
console.log(passagers)
*/

console.log("Filtrer && include "+passagers.filter(p=>p.toLowerCase().includes("d")))

console.log("---objet")

const contact = {nom: "name1",prenom: "prenom1"}
contact.telefones= {}
contact.telefones={portable: '0987654333',fix:"04567890"}
contact.amis=["Franck","Didier"]
contact.amis=[{nom: "name1",prenom: "prenom2",portable: '0987654333',fix:"04567890"},
             {nom: "name2",prenom: "prenom2",portable: '098765467',fix:"04567990"}
            ]
console.log(contact)


//passagers.filter(p=>p.tolowercase().includes("d"))  find findindex includes(verifie) pop() 
//slice(0,2) passagers.
//splice(2,1) passagers.
//const [premeir, second, ...lesautres]= passagers
//reverse()
