// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numeri = [];
for(let i = 0; i < 5; i++) {
    const numRandom = Math.floor(Math.random() * 99 + 1);
    numeri.push(numRandom);
    if(i == 4) {
        document.querySelector('.content_num').append(numRandom)
    } else {
        document.querySelector('.content_num').append(numRandom + ',')
    }
}

const numeriUtente = [];
setTimeout( () => {
    document.querySelector('.content_num').innerHTML = '';
    for(let i = 0; i < 5; i++) {
        const numUtente = parseInt(prompt('Inserisci il numero'));
        if (numeri.includes(numUtente)) {
            numeriUtente.push(numUtente);
        }        
    }

    numeriUtente.forEach((element, i) => {
        if(i == numeriUtente.length - 1) {
            document.querySelector('.content_num').append(element)
        } else {
            document.querySelector('.content_num').append(element + ',')
        }
    })
    
    
}, 30000);





