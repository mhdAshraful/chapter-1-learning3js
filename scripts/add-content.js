var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Good Evening";
} else if (hourNow > 12) {
    greeting = "Good Afternoon";
} else if (hourNow > 0) {
    greeting = "Good Morning";
} else {
    greeting = "Welcome!!!";
}

document.write('<h3 class="greetings">' + greeting + "</h3>");

let name = 'Holly MOlly';
let numberofTiles = name.length;
let tileTotal = numberofTiles * 5;
let shippingCost = 7;
let finalCost = tileTotal + shippingCost;

let usersName = document.getElementById('userName');
usersName.innerHTML = name;
let totaltile = document.getElementById('totalTiles');
totaltile.innerHTML = numberofTiles;
let costforalltiles = document.getElementById('subtotal');
costforalltiles.innerHTML = '$' + tileTotal;
let shippingVar = document.getElementById('ship');
shippingVar.innerHTML = '$' + shippingCost;
let totalamount = document.getElementById('totalCost');
totalamount.innerHTML = '$' + finalCost;