contact=[{nom: "gueye",prenom: "Bachir",telephone: '0987654333'},
          {nom: "diop",prenom: "Fatou",telephone: '098765467'},
          {nom: "diop",prenom: "Rama",telephone: '098895467'}
        ]     
console.log(contact)

const annuaire = (param)=>{
   let results = ""; 
   for(let i=0;i<contact.length;i++){
     if(contact[i].nom.includes(param) || contact[i].telephone.includes(param) )
     {
       
        results = results + "Prénom : "+contact[i].prenom+"\n Nom : "+contact[i].nom+" "+contact[i].telephone+"\n\n";
     }
    
  }

  if(results!=""){
   alert(results)
  }
  else{
     alert('Contact inexistant')
  }
}

let search = prompt("Faites une recherche par nom ou numéro de téléphone");
annuaire(search)
