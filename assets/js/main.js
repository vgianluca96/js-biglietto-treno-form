

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
    } else if (discount == 'discount40') {
        price = price * 0.6;
    }

    // Arrotondamento prezzo
    price = price.toFixed(2);

    // console.log(price);

    document.getElementById('outputPrice').innerHTML = price;
    
    
}


