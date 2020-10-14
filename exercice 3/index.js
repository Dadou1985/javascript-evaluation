function Initialisation() {
    document.getElementById("rejouer").style.visibility = "hidden";
    joueurs = ['X', 'O'];
    joueur = joueurs[0];
};

function jouer(zone) { 
    if (joueur === joueurs[0]) {
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            alert("You can't do that...");
        } else {

            document.getElementById(zone).style.backgroundImage = "url(image-morpion/croix.png)";
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = "  ";
            joueur = joueurs[1];
        }
    }
    else if (joueur === joueurs[1]) { 
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            alert("You can't do that...");
        } else {

            document.getElementById(zone).style.backgroundImage = "url(image-morpion/rond.png)";
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = " ";
            joueur = joueurs[0];
        }
    }
    ;
    checking();
}
;

function checking() {
    one = document.getElementById('Zonea1').textContent;
    two = document.getElementById('Zonea2').textContent
    three = document.getElementById('Zonea3').textContent;
    four = document.getElementById('Zoneb1').textContent;
    five = document.getElementById('Zoneb2').textContent;
    six = document.getElementById('Zoneb3').textContent;
    seven = document.getElementById('Zonec1').textContent;
    eight = document.getElementById('Zonec2').textContent;
    nine = document.getElementById('Zonec3').textContent;
    if (one === two && one === three ||
        four === five && four === six ||
        seven === eight && seven === nine ||
        one === five && one === nine ||
        three === five && three === seven ||
        one === four && one === seven ||
        two === five && two === eight ||
        three === six && three === nine) {
        if (joueur === joueurs[0]) {
            alert('Player O WIN');
        } else if (joueur === joueurs[1]) {
            alert('Player X WIN');
        }
        document.getElementById("rejouer").style.visibility = "visible";
        document.getElementById("rejouer").onclick = function() {
            location.reload();
        }


    }

}
