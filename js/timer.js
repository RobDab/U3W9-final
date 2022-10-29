"use strict";
let date1;
let date2;
// !BISONGA CORREGGERE LA FUNZIONE
//! Devo creare un 'myInterval' ad esempio, che richiama la callback di timer, e imposta l'intervallo
//! come secondo parametro. 
//! Potrò quindi richiamare myInterval come parametro di clearInterval('myInterval) per fermare l'esecuzione del Timer
function startTimer() {
    let date1 = new Date;
    setInterval(() => {
        let date2 = new Date;
        console.log(Math.abs(date1.getSeconds() - date2.getSeconds()) + ' seconds passed');
    }, 1000);
}
startTimer();
// in una seguente funzione passata in onClick ad un button, potro inserire clearInterval
