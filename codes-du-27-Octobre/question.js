let douleur = prompt("Douleur ? Répondre par : Abdomen, Gorge ou Aucune")

if(douleur.toUpperCase() == "ABDOMEN" ){
    alert("Vous souffrez d'Appendencite")
}

else if(douleur.toUpperCase() == "GORGE"){
    let fievre = prompt("Avez vous de la fièvre ? Répondre par : oui ou non ? ")
    if(fievre.toLowerCase() == "oui"){
        alert('Rhume')
    }
    else{
        alert('Mal de gorge')
    }
}

else if(douleur.toUpperCase() == "AUCUNE" || douleur==""){
    let toux = prompt("Toussez vous ? Répondre par : oui ou non ?")
    if(toux.toLowerCase() == "oui"){
        let fievre = prompt("Avez vous de la fièvre ? Répondre par : oui ou non ? ")
        if(fievre.toLowerCase() == "oui"){
            alert('Rhume')
        }
        else{
            alert('Refroidissement')
        }
    }
    else{
        alert('Rien')
    }
}
else{
    alert('Vous avez un autre type de douleur')
}