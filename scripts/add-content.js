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
/// end chapter 1+2 the js book ////

// chapter 3 
changeNotice();

function changeNotice() {
    let note = "Welcome Stranger!!!!"
    let el = document.getElementById('notice');
    el.textContent = note;
}

// fuction can take arguments, and return values
let finding;

function calcArea(width, height) {
    finding = width * height;
    return finding;
}
calcArea(4, 56);
// document.getElementById('area').innerHTML(finding); // does not work

// document.getElementById('area').replaceWith(finding); //works but replaces the <span></span> tag

var x = document.getElementById('area'); //  works
x.innerHTML = finding;


// multiple parameter and return values ...

let itemArea, itemLength, itemHeight, itemWidth, volume, weight;

itemWidth = 12.5;
itemHeight = 7.8;
itemLength = 11.3;

let w = document.getElementById('width');
w.innerHTML = itemWidth;

let h = document.getElementById('height');
h.innerHTML = itemHeight;

let p = document.getElementById('lengths');
p.innerHTML = itemLength;


let regular = 750;
let medium = 1550;
let oversized = 5550;

function getVolume(itemLength, itemHeight, itemWidth) {
    itemArea = itemLength * itemWidth;
    volume = itemArea * itemHeight;
    let ar = document.getElementById('boxArea');
    ar.innerHTML = itemArea;
    let vol = document.getElementById('boxVolume');
    vol.innerHTML = volume;

    if (volume <= regular) {
        weight = "Regular";
        let x = document.getElementById('boxWeight');
        x.innerHTML = weight;
    } else if (volume <= medium) {
        weight = "Medium";
        let x = document.getElementById('boxWeight');
        x.innerHTML = weight;
    } else if (volume <= oversized) {
        weight = "oversized";
        let x = document.getElementById('boxWeight');
        x.innerHTML = weight;
    } else {
        weight = "weight could not be measured";
        let x = document.getElementById('boxWeight');
        x.innerHTML = weight;
    }
    var info = [weight, itemArea, volume]
    return info;
}
getVolume(itemLength, itemHeight, itemWidth);