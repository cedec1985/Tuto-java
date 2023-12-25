function LottoCase(number) {
    this.number = number;
    this.casesCochees = [];

 
      this.cocher = function() {
        if (this.casesCochees.length === 6) {
          console.log("Félicitations ! Vous avez coché les cases : " + this.casesCochees.join(", "));
        } else {
          console.log("Vous n'avez pas encore coché les 6 cases nécessaires.");
        }
      }
  }
function afficher()
   {
   var div = document.getElementById("id");
   var table = div.appendChild(document.createElement("table"));
   for (var i=0; i<7; i++)
       {
    var tr= table.appendChild(document.createElement("tr"));
    for (var j=1; j<8; j++)
           {
           var td = tr.appendChild(document.createElement("td"));
            td.setAttribute("style", "border:18px solid; padding:1.4em");  
            td.style.borderColor="red";
            var number = i * 7 + j;
            var lottoCase = new LottoCase(number);
          
            td.textContent = number;
            td.addEventListener('click', lottoCase.cocher.bind(lottoCase));
}}
} 
let maGrille = new Grille();

// Cocher des cases
maGrille.casesCochees.push(this.number);
maGrille.casesCochees.push(this.number);
maGrille.casesCochees.push(this.number);
maGrille.casesCochees.push(this.number);
maGrille.casesCochees.push(this.number);
maGrille.casesCochees.push(this.number);
// Vérification après avoir coché des cases

// Terminer le jeu
maGrille.terminer();


