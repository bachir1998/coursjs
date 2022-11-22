contact=[{nom: "gueye",prenom: "Bachir",telephone: '0987654333'},
          {nom: "diop",prenom: "Fatou",telephone: '098765467'},
          {nom: "diop",prenom: "Rama",telephone: '098895467'}
        ]     
console.log(contact)

const annuaire = (param)=>{
    
   for(let i=0;i<contact.length;i++){
     if(contact[i].nom.includes(param))
     {
        alert(contact[i].nom+" "+contact[i].telephone)
     }
     else if(contact[i].telephone.includes(param)){
        alert(contact[i].nom+" "+contact[i].telephone)
     }
  }
}

let search = prompt("Faites une recherche par nom ou numéro de téléphone");
annuaire(search)
