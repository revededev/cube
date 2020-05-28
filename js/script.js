function printresults(){
    console.log('coucou')
}
let recap = [];
const questions = {
    'q1':{
            'question': 'Habitez-vous vous en France ?', // Do you leave
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : ['img_1.jgp'],
            'type': 'radio',
            'suite':function (rep){
                if (rep.includes('R1')){
                    return writequestion('q2');
                } else {
                    return writequestion('q3');
                }
            }
        },
    'q2':{
            'question': 'A quoi servira votre CUBE ?', // What will you be using your Cube for ?
            'reponses': { 'R1': '1','R2': '2','R3': '3','R4': '4','R5': '5','R6': '6' },
            'img' : ['img_4.jgp'],
            'type': 'radio',
            'suite': function (rep){
                    return writequestion('q4');
            }
        },
    'q3':{
            'question': 'Fin du questionnaire', // Is this the property you're looking for ?
            'reponses': null,
            'img' : ['img_2.jgp'],
            'type': null,
            'suite': null
        },
    'q4':{
            'question': 'Voulez-vous : une baignoire ou une cuisine ?', // 'Do you want a Kitchen or Bathroom?',
            'reponses': { 'R1': 'Une baignoire', 'R2': 'Une cuisine'},
            'img' : ['img_5.jgp'],
            'type': 'radio',
            'suite':function (rep){
                    return writequestion('q5');
            }
        },
    'q5':{
            'question': 'Quelle est votre surface préférée ?', 
            'reponses': { 'R1' : 'm2'},
            'img' : null,
            'type': 'number',
            'suite':function (rep){
                    return writequestion('q6');
            }
    },
    'q6':{
            'question': 'Avez-vous au moins une construction sur votre terrain ?', // Do you have any Construction in your Backyard? (Image 6)
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : ['img_6'],
            'type': 'radio',
            'suite':function (rep){
                if (rep.includes('R1')){
                    return writequestion('q7');
                } else {
                    return writequestion('q8');
                }
            }
    },
    'q7':{
        'question': 'Voulez-vous détruire cette construction ?', // Would you like to remove this structure? (Image 7)
        'reponses': { 'R1': 'Oui', 'R2': 'Non'},
        'img' : ['img_7'],
        'type': 'radio',
        'suite':function (rep){
                return writequestion('q8');   
        }
    },
    'q8':{
        'question': 'Quelle type de consctruction aimez-vous le plus ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'img_11 en bg', 'R2': 'img_12 en bg', 'R3' :'img_13 en bg'},
        'img' : ['img_11.jpg','img_12.jpg','img_13.jpg'],
        'type': 'button',
        'suite':function (rep){
            printresults(recap);
            return writequestion('q9');   
        }
        // fonction pour Récapituler de toutes les q et r associées + envoie d"un mail et proposer envoie de mail telechargement de la config'
    },
    'q9':{
        'question': 'Voulez-vous sauvegarder votre rapport ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : ['img_9.jpg'],
        'select': { 'S1': ''},
        'suite':function (rep){

            return writequestion('q9bis');   
        }
        // fonction qui enoive un mail de récap au client potentiel
    },
    'q9bis':{
        'question': "Voulez-vous nous l'envoyer par email ?", // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : ['img_9.jpg'],
        'type': 'radio',
        'suite':function (rep){
            printResults()
            return writequestion('q10');   
        }
    },
    'q10':{
        'question': 'Achetez-vous votre CUBE ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : ['img_17.jpg','img_18.jpg'],
        'type': 'button',
        'suite':function (rep){
            if (rep.includes('R1')){
                return writequestion('q11');
            } else {
                return writequestion('q3');
            }
        }
    },
    'q11':{
        'question': 'envoie vers une page de paiement', // Which look do you like most? (Image 11-12-13)
        'reponses': null,
        'img' : null,
        'type': 'button',
        'suite': null,
    }
}

function writequestion(q){
    if( questions[q].suite === null)
    {
        let quest = document.getElementById("question");
        quest.textContent = questions[q].question;
        if(document.querySelectorAll('.buttonR')) {
            document.querySelectorAll(".buttonR").forEach(e => e.parentNode.removeChild(e));
            }  
    }else{
    let quest = document.getElementById("question");
    quest.textContent = questions[q].question;
    let nbr = 1
    if(document.querySelectorAll('.buttonR')) {
        document.querySelectorAll(".buttonR").forEach(e => e.parentNode.removeChild(e));
        }  
    for (const key in questions[q].reponses) {
        if (questions[q].reponses.hasOwnProperty(key)) {
                let r = document.createElement("button");

                r.setAttribute('id','R' + nbr)
                r.setAttribute('class', 'buttonR')
                r.textContent = questions[q].reponses[key];
                document.getElementById('questionReponses').appendChild(r);

                r.addEventListener("click", function(){   
                    recap.push({ 'laQuestion' : questions[q].question , 'laReponse' : questions[q].reponses[r.id]});
                    console.log(recap)
                    questions[q].suite(r.id)
                });
                nbr++
        }
    }
} 
};

writequestion('q1');