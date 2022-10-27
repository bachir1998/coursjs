console.log("Fichier sur les conditionnelles en JS")


const nombrePassagers = 90
const aSonPasseport = false
const passagerVip = true

if(nombrePassagers <= 100 && aSonPasseport ){
    console.log('passager accepté')
}
else{
    console.log('passager accepté')
}


const prenom = "Dani"

switch(prenom){
    case "Daniel" :
    console.log("Ton prénom est Daniel")
    break

    case "Sophie" :
    console.log("Ton prénom est Sophie")
    break

    default:
    console.log('Je ne connais pas ton prénom')


}



const userLoggedIn = false
const nomUtilisateur = "Daniel"
const prenomUtilisateur = ""

console.log(userLoggedIn? "Je suis un utilisateur logué":"Je suis un utilisateur qui n'est pas loggé")
