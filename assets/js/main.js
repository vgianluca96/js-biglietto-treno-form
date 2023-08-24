

// Dicharazione variabili
let userName;
let distanceKm;
let discount;

// Prezzo al km
const unitPrice = 0.21;

// function di calcolo del prezzo del biglietto
function ticketPrice () {

    // Salvataggio variabili
    userName = document.getElementById('InputUserName').value;
    distanceKm = document.getElementById('InputdistanceKm').value;
    discount = document.getElementById('userAge').value;


    // Prezzo biglietto
    price = unitPrice * distanceKm;

    /*
    console.log(userName);
    console.log(distanceKm);
    console.log(discount);
    */
    
    // Applicazione sconto
    if (discount == 'discount20') {
        price = price * 0.8;
        offer = 'Sonto 20% riservato a minorenni'
    } else if (discount == 'discount40') {
        price = price * 0.6;
        offer = 'Sconto 40% riservato a over 65';
    } else if (discount == 'discount0') {
        offer = 'Prezzo base senza sconti';
    }

    // Arrotondamento prezzo
    price = price.toFixed(2);

    // console.log(price);

    // Stampa a video dei dettagli del biglietto
    document.getElementById('passengerName').innerHTML = userName;
    document.getElementById('offer').innerHTML = offer;
    document.getElementById('outputPrice').innerHTML = price;

    
}


