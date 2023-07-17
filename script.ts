function generaNumeroCasuale(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function GiocatorePiùVicino(numeroCasuale: number, giocatore1: number, giocatore2: number): string {
    const distanzaGiocatore1 = Math.abs(numeroCasuale - giocatore1);
    const distanzaGiocatore2 = Math.abs(numeroCasuale - giocatore2);
  
    if (distanzaGiocatore1 === distanzaGiocatore2) {
      return "I due giocatori si sono avvicinati allo stesso modo.";
    } else if (distanzaGiocatore1 < distanzaGiocatore2) {
      return "Nessuno dei due ha indovinato il numero casuale, ma il giocatore 1 si è avvicinato di più.";
    } else {
      return "Nessuno dei due ha indovinato il numero casuale, ma il giocatore 2 si è avvicinato di più.";
    }
  }
  
  function gioca(giocatore1: number, giocatore2: number): string {
    const numeroCasuale = generaNumeroCasuale();
    console.log("Output numero casuale generato:", numeroCasuale);
  
    if (giocatore1 === numeroCasuale || giocatore2 === numeroCasuale) {
      return "Uno dei due giocatori ha indovinato il numero casuale!";
    } else {
      return GiocatorePiùVicino(numeroCasuale, giocatore1, giocatore2);
    }
  }
  
  
  const inputGiocatore1 = 5;
  const inputGiocatore2 = 10;
  console.log(gioca(inputGiocatore1, inputGiocatore2));
  