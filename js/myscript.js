// console.log('ciaoooo')


// CONSEGNA:
// Scrivi un programma che stampi in console i numeri da 1 a 100,



//     ma che per i multipli di 3 stampi “Fizz” al posto del numero


// e per i multipli di 5 stampi “Buzz”.


// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro ?
//  Abbiamo visto qualcosa di particolare che possiamo usare ?

//     BONUS 1:
// Crea un container nel DOM, aggiungendo(attraverso la funzione append())
// un elemento html con il numero o la stringa corretta da mostrare.


//     BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, 
// a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto
//  dallo screenshot fornito in consegna.

 const grigliaElement= document.getElementById('griglia');
//  console.log(grigliaElement)

grigliaElement.innerHTML=''
 

for (let i = 1; i <= 100; i++) {

    let number= i;
    const divElement= document.createElement('div')
    divElement.classList.add('cell');
    

    if (i % 3 === 0 && i % 5 === 0) {

        console.log('FizzBuzz');
        number="FizzBuzz";
        divElement.classList.add('fizzbuzz');

    } else if (i % 5 === 0) {

        console.log("Buzz");
        number="Buzz";
        divElement.classList.add('buzz');

    } else if (i % 3 === 0) {

        console.log("Fizz");
        number="Fizz";
        divElement.classList.add('fizz');
    } else {

        console.log(i);

    }
    divElement.append(number);
    grigliaElement.append(divElement);
    

}