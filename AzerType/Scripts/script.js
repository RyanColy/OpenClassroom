function afficherResultat(score, nbMotsProposes){
    let spanScore = document.querySelector(".zoneScore span")

    let affichageScore = `${score} / ${nbMotsProposes}`

    spanScore.innerText = affichageScore
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

function choisirPhrasesouMots() {
    let choix = prompt("Veuillez choisir une liste entre mots ou phrases")
    while (choix !== "mots" && choix !== "phrases"){
        choix = prompt("Veuillez choisir une liste entre mots ou phrases")
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        let motUtilisateur = prompt("Entrez le mot " + listePropositions[i])
            if (motUtilisateur === listePropositions[i]) {
                score++
        }
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesouMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    }
    else{
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}