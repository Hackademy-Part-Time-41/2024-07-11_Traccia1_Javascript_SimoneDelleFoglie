function contnumber(num) {
    if (num <9) {
        alert('il numero è di una cifra')
        
    } else if (num <=99) {
        alert('il numero è di due cifre')
    }
      else if (num <=999) {
        alert('il numero è di tre cifre cifre')
    }
      else if (num <=9999) {
        alert('il numero è di quattro cifre')
    }   
      else {
        alert('il numero è troppo grande')
    }
        
}

let = contnumber(prompt('Inserisci un numero'))