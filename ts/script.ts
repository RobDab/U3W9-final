// Interfaccia smartphone
interface Phone {
    marca: string;
    modello: string;
    credit: number;
    calls: number;
}


enum Recharge {         //Enum usato per impostare delle soglie di ricarica predefinite.
    S = 5,
    M = 10,
    L = 15,
    Xl = 20,
}


// classe smartphone che importa l'interfaccia
class smartphone implements Phone {
    // marca: string;
    // modello: string;
    credit: number = 0;
    calls: number = 0;
    static callCounter = 0;
    constructor(public marca:string, public modello:string){
        this.marca = marca; 
        this.modello = modello;
    }


}

// classe User 
// un User astratto avrà tra i prorpi attributi anche uno smartphone (rapporto di "associazione/appartenenza")
// => dallo user1 o 2 potrò accedere ai parametri (chiamate e credito ad esempio) dei rispettivi telefoni.
// avranno un metodo per ricaricare il credito del proprio smartphone.
class User {
    
    constructor(public name: string,public smartphone: smartphone){
        this.name = name;
        this.smartphone = smartphone;
    }

    buyCredit(cash: Recharge): void {
        this.smartphone.credit += cash;
        console.log(`Nuovo credito: ${this.smartphone.credit}€`)
    }

    // tarffa = 0,20 cent/minuto

    call(duration: number){
        if(this.smartphone.credit/0.20 >= duration){
            this.smartphone.calls += 1;
            this.smartphone.credit -= duration * 0.20;
            smartphone.callCounter += 1;
            console.log(`credito residuo: ${this.smartphone.credit.toFixed(2)}`)
        }else (
            console.log('credito insufficiente, ricarica. usando "IlTuoNome".buyCredit(Recharge.[S/M/L/XL])')
        )    
    }

    
}

let Mario = new User('Mario', new smartphone('Samsung','Galaxy'))
let Bobbie = new User('Bobbie', new smartphone('Redmi', 'Note'))
let Will = new User('Will', new smartphone('Apple','IPhone'))



