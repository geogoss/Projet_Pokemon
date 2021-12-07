
class Pokemon{
    constructor(nom, niveau, pointDeVie, vitesse, type){
        this.nom = nom
        this.niveau = niveau
        this.pointDeVie = pointDeVie
        this.vitesse = vitesse
        this.type = type
    }

}

class Dracaufeu extends Pokemon{
    constructor(nom, niveau, pointDeVie, vitesse, type){
        super(nom, niveau, pointDeVie, vitesse, type)
        this.lanceFlamme = (x) =>{
            x.pointDeVie -= 21
            alert(this.nom + " Lance une attaque lanceFlamme")
            alert(x.nom + " a pris 21 points de dégâts, il lui reste " + x.pointDeVie)
            
        }
        this.laserDracau = (x) =>{
            x.pointDeVie -= 40
            alert(this.nom + " Lance une attaque laserDracau")
            alert(x.nom + " a pris 40 points de dégâts, il lui reste " + x.pointDeVie)
        }
        this.vol = (x) =>{
            x.pointDeVie -= 21
            alert(this.nom + " Lance une attaque vol")
            alert(x.nom + " a pris 21 points de dégâts, il lui reste " + x.pointDeVie)
        }
        this.feu = (x) =>{
            x.pointDeVie -= 21
            alert(this.nom + " Lance une attaque feu")
            alert(x.nom + " a pris 21 points de dégâts, il lui reste " + x.pointDeVie)
        }

    }
}




class Pikachu extends Pokemon{
    constructor(nom, niveau, pointDeVie, vitesse, type){
        super(nom, niveau, pointDeVie, vitesse, type)
        this.fatalFoudre = (x) =>{
            x.pointDeVie -= 25
            alert(this.nom + " Lance une attaque fatalFoudre")
            alert(x.nom + " a pris 25 points de dégâts, il lui reste " + x.pointDeVie)
        }
        this.queueDeFer = (x) =>{
            x.pointDeVie -= 25
            alert(this.nom + " Lance une attaque queueDeFer")
            alert(x.nom + " a pris 25 points de dégâts, il lui reste " + x.pointDeVie)
        }
        this.charge = (x) =>{
            x.pointDeVie -= 21
            alert(this.nom + " Lance une attaque charge")
            alert(x.nom + " a pris 21 points de dégâts, il lui reste " + x.pointDeVie)
        }
        this.quickAttaque = (x) =>{
            x.pointDeVie -= 21
            alert(this.nom + "  Lance une attaque quickAttaque")
            alert(x.nom + " a pris 21 points de dégâts, il lui reste " + x.pointDeVie)
            
        }


    }

}


export let dracaufeu = new Dracaufeu ("dracaufeu", 5, 78, 100, ["feu","vol"])
export let pikachu = new Pikachu("pikachu", 3, 35, 90, ["electrique", "feu"])


