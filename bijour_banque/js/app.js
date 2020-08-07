const mess = "Hello from app.js";
console.log(mess);

//Quand tu clique paf fonction pour mettre tout ça là où il faut//
document.querySelector('.envoi').addEventListener('click', function(event){


    //Récupére le montant
    var combien = document.getElementById("montant").value;
    //Récupére Crédit ou Débit avec le "bouton" + - //
    var ope = document.getElementById("operation");
    //Récupére le nom du crédit ou de la dépense//
    var typeArgent = document.getElementById("intitule").value;
    //Récupére le crédit total//
    var totalCredit = document.getElementById("totalCredit");
    //Récupére le débit total//
    var totalDebit = document.getElementById("totalDebit");
    //Récupére le grand total//
    var totot = document.getElementById("total");
    //Récupére liste crédit//
    var ulc = document.getElementById("ulc");
    //Récupére liste débit//
    var uld = document.getElementById("uld");
    //pourcentage débit
    var percentDeb = document.getElementById("totalDebitPercent");
    //devise
    var devise = document.getElementById("devise");



    event.preventDefault();
    console.log("COCOU");
    console.log(typeArgent);


         if (ope.value == "+"){
              console.log(combien);
              var newLi = document.createElement('li');
              ulc.appendChild(newLi);
              var newSpan = document.createElement('span');
              newSpan.setAttribute("class", "intitule");
              newLi.appendChild(newSpan);
              newSpan.innerHTML = typeArgent;
              var newSpan2 = document.createElement('span');
              newSpan2.setAttribute("class", "montant txt-color-gazoil");
              newLi.appendChild(newSpan2);
              newSpan2.innerHTML = Number(combien)+" €";
              totalCredit.innerHTML = Number(totalCredit.innerHTML) + Number(combien);
              console.log(totalCredit.innerHTML);
        }
        else{
             console.log(combien);
             var newLi = document.createElement('li');
             uld.appendChild(newLi);
             var newSpan = document.createElement('span');
             newSpan.setAttribute("class", "intitule");
             newLi.appendChild(newSpan);
             newSpan.innerHTML = typeArgent;
             var newSpan2 = document.createElement('span');
             newSpan2.setAttribute("class", "montant txt-color-red");
             newLi.appendChild(newSpan2);
             newSpan2.innerHTML = Number(combien)+" €";
             var newSpan3 = document.createElement('span');
             newSpan3.setAttribute("class", "percent txt-color-red");
             newLi.appendChild(newSpan3);
             newSpan3.innerHTML = ((Number(combien)/Number(totalCredit.innerHTML))*100).toFixed(2) + " %" ;
             totalDebit.innerHTML = Number(totalDebit.innerHTML) + Number(combien) ;
             console.log(totalDebit.innerHTML);
        }
     totot.innerHTML = (Number(totalCredit.innerHTML) - Number(totalDebit.innerHTML)).toFixed(2);
     percentDeb.innerHTML = (Number(totalDebit.innerHTML)/Number(totalCredit.innerHTML)*100).toFixed(2) +" %";
        if (Number(totot.innerHTML) < 0){
               totot.style.color ='red';
               devise.style.color = 'red';
        }
});

// let allCred = [
//     [
//         "salaire",
//         "1520 €",
//     ]
// ]

// let allDeb = [
//     [
//         "achat PS4",
//         "499.99 €",
//         percent
//     ],
//     [
//         "achat TV",
//         "599 €",
//         percentTV
//     ]
// ];

// allDeb.forEach(debit => {
//     document.createElement('li')
//     debit.forEach(line => {
//         let intitu =document.createElement('span');
//         intitu.value = line[0];
//         let valu = document.createElement('span');
//         valu.value = line[1];
//         let perc = document.createElement('span');
//         perc.value = line[2];

//     })
// });