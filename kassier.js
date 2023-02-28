function cashCounter(price,cash){
    const change= cash - price; // 50 - 4.5
    if (change<0)  // 3-4.5 = -1.5
    {
        return `Kunde soll ${price-cash} mehr Euro zahlen` // 4.5 - 3 = 1.5 muss noch zhalen
    }
      const coins = [
          { name: '20 Euro', value: 2000 },
          { name: '10 Euro', value: 1000 },
          { name: '5 Euro', value: 500 },
          { name: '2 Euro', value: 200 },
          { name: '1 Euro', value: 100 },
          { name: '0.5 Cent', value: 50 },
          { name: '0.2 Cent', value: 20 },
          { name: '0.1 Cent', value: 10 },
          { name: '0.05 Cent', value: 5 },
          { name: '0.01 Cent', value: 1 },
        ];
        const klamen = ["die zahlung erfolgreich"]
        let cintcange = change * 100 // 1 Euro = 100 cint
        for(const list of coins){
            if (cintcange >= list.value){
                const Rechner = Math.floor(cintcange / list.value) // 195.5 / name = 9 mal 20 Euro und  einmal 10 und ein mal 5 einmal 0.5
                klamen.push({[list.name]: Rechner})
                cintcange -= Rechner * list.value ;
            }
        }
        if (cintcange > 0){
            return 'keine wechselgeld vorhanden';
        }
        return klamen ;
    }
    console.log(cashCounter(3.75,50));
    console.log(cashCounter(6,6));
    console.log(cashCounter(50,25));