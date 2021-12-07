        //C'est moi qui attaque
function moiAttaque(demande,poke,vs) {
    demande = +prompt("quelle attaque souhaites-tu utiliser ? \n 1 = fatalFoudre \n 2 = queueDeFer \n 3 = charge \n 4 = quickAttaque")

    if (demande == 1) {
        poke.fatalFoudre(vs)
    }
    else if (demande == 2) {
        poke.queueDeFer(vs)
    }
    else if (demande == 3) {
        poke.charge(vs)
    }
    else if (demande == 4) {
        poke.quickAttaque(vs)
    }
    else {
        alert("Il faut rentrer un numéro proposé")
    }
}

        //C'est l'ordinateur qui attaque
function vsAttaque(random,poke,vs) {
        random = Math.round(Math.random()*4)
        if (random == 1) {
            vs.lance.Flamme(poke)
        }
        else if (random == 2) {
            vs.laserDracau(poke)
        }
        else if (random == 3) {
            vs.vol(poke)                
        }
        else if (random == 4) {
            vs.feu(poke)
        }      
}

function check(poke) {
    if (poke.pointDeVie <= 0) {
        return true
    }
    else{
        return false
    }

}



export function Action(poke,vs) {
    alert(poke.nom + " rentre dans le combat ! \n Prends garde à toi");
    alert(vs.nom + " rentre dans le combat");
    
    let depart = false;
    let demande;
    let random;
    let arret;

    while (!depart) {
        if (poke.vitesse > vs.vitesse) {
            // C'est le joueur qui commence
            moiAttaque(demande,poke,vs)
            arret = check(vs, arret)
                if (arret == true) {
                    alert("tu es éliminé morei")
                    return depart = true
                }
            vsAttaque(random,poke,vs)
            arret = check(poke, arret)
                if (arret == true) {
                    alert("tu es éliminé morei")
                    return depart = true
                }

        }
        else{
            //C'est l'ordinateur qui commence
            vsAttaque(random,poke,vs)
            arret = check(poke, arret)
            if (arret == true) {
                alert("tu es éliminé morei")
                return depart = true
            }
  
            moiAttaque(demande,poke,vs)
            arret = check(vs, arret)
            if (arret == true) {
                alert("tu es éliminé morei")
                return depart = true
            }

        }
    }

}
