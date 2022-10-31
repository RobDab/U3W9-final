"use strict";
var Recharge;
(function (Recharge) {
    Recharge[Recharge["S"] = 5] = "S";
    Recharge[Recharge["M"] = 10] = "M";
    Recharge[Recharge["L"] = 15] = "L";
    Recharge[Recharge["Xl"] = 20] = "Xl";
})(Recharge || (Recharge = {}));
// classe smartphone che importa l'interfaccia
class smartphone {
    constructor(marca, modello) {
        this.marca = marca;
        this.modello = modello;
        // marca: string;
        // modello: string;
        this.credit = 0;
        this.calls = 0;
        this.marca = marca;
        this.modello = modello;
    }
}
smartphone.callCounter = 0;
// classe User 
// un User astratto avrà tra i prorpi attributi anche uno smartphone (rapporto di "associazione/appartenenza")
// => dallo user1 o 2 potrò accedere ai parametri (chiamate e credito ad esempio) dei rispettivi telefoni.
// avranno un metodo per ricaricare il credito del proprio smartphone.
class User {
    constructor(name, smartphone) {
        this.name = name;
        this.smartphone = smartphone;
        this.name = name;
        this.smartphone = smartphone;
    }
    buyCredit(cash) {
        this.smartphone.credit += cash;
        console.log(`Nuovo credito: ${this.smartphone.credit}€`);
    }
    // tarffa = 0,20 cent/minuto
    call(duration) {
        if (this.smartphone.credit / 0.20 >= duration) {
            this.smartphone.calls += 1;
            this.smartphone.credit -= duration * 0.20;
            smartphone.callCounter += 1;
            console.log(`credito residuo: ${this.smartphone.credit.toFixed(2)}`);
        }
        else
            (console.log('credito insufficiente, ricarica. usando "IlTuoNome".buyCredit(Recharge.[S/M/L/XL])'));
    }
}
let Mario = new User('Mario', new smartphone('Samsung', 'Galaxy'));
let Bobbie = new User('Bobbie', new smartphone('Redmi', 'Note'));
let Will = new User('Will', new smartphone('Apple', 'IPhone'));
