let i =1;
let TotalOrdi =0;
let TotalUser=0
var tab=["feuille","pierre","ciseaux"]

function OptionGame(option)
{
     return option[Math.floor(Math.random()*option.length)];
}

while(i<4){    
    let option = prompt("Choisissez une option")
    let SumOrdi = 0;
    let SumUser = 0;
    switch(OptionGame(tab)){
        case 'pierre' :
            if(option.toLowerCase()=='pierre')
            {
                SumOrdi++;
                SumUser++;
                console.log(" Manche "+i+" terminée : ScoreUser = ScoreOrdi "+SumUser+", option pierre choisie pour les 2 camps")

            }  
            else if(option.toLowerCase()=='ciseaux')    
            {
                SumOrdi++;
                console.log(" Manche "+i+" terminé : Vous avez perdu ScoreUser : "+SumUser+" l'ordi a choisi pierre et vous ciseaux")
            }
            else
            {
                SumUser++; 
                console.log(" Manche "+i+" terminé : Vous avez gagné ScoreUser, "+SumUser+" l'ordi a choisi pierre et vous feuille")
            }
        break

        case 'ciseaux' :
            if(option.toLowerCase()=='ciseaux')
            {
                SumOrdi++;
                SumUser++;
                console.log(" Manche "+i+" terminée : ScoreUser = ScoreOrdi "+SumUser+", option ciseaux choisie pour les 2 camps")
                

            }  
            else if(option.toLowerCase()=='pierre')    
            {
                SumUser++;
                console.log(" Manche "+i+" terminé : Vous avez gagné ScoreUser, "+SumUser+" l'ordi a choisi ciseau et vous pierre")
            }
            else
            {
                SumOrdi++; 
                console.log(" Manche "+i+" terminé : Vous avez perdu ScoreUser : "+SumUser+" l'ordi a choisi ciseau et vous feuille")
            }
        break

        case 'feuille' :
            if(option.toLowerCase()=='feuille')
            {
                SumOrdi++;
                SumUser++;
                console.log(" Manche "+i+" terminée : ScoreUser = ScoreOrdi "+SumUser+", option feuille choisie pour les 2 camps")
            }  
            else if(option.toLowerCase()=='ciseaux')    
            {
                SumUser++;
                console.log(" Manche "+i+" terminé : Vous avez gagné ScoreUser, "+SumUser+" l'ordi a choisi feuille et vous ciseaux")
            }
            else
            {
                SumOrdi++; 
                console.log(" Manche "+i+" terminé : Vous avez perdu ScoreUser : "+SumUser+" l'ordi a choisi feuille et vous pierre")
            }
        break

        default:
        console.log('entrer une valeur valide')    
                
    }
    i++;
    TotalOrdi += SumOrdi;
    TotalUser += SumUser;

}
console.log(" Partie terminée, ScoreUser : "+TotalUser+", ScoreMachine : "+TotalOrdi)



