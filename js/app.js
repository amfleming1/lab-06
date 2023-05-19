console.log('Hello World')
let parentForSales = document.getElementById("sales-data");
console.log(parentForSales)
let salesdataElement = document.createElement("p");
console.log(salesdataElement)
salesdataElement.textContent = 'Sales Info'
console.log(salesdataElement)
parentForSales.appendChild(salesdataElement);

"use strict";

let hoursArray = ['7am','8am', '9am', '10am', '11am', '12pm','1pm','2pm', '3pm,', '4pm', '5pm', '6pm', '7pm']

let seattleObject = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
}

let tokyoObject = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
}

let dubaiObject = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
}

let parisObject = {
    location: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
}

let limaObject = {
    location: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
}


let storesArray = [seattleObject, tokyoObject, dubaiObject, parisObject, limaObject]


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
    // outputting random number for min & max
}

let parent = document.getElementById("sales-data")
for (let store of storesArray) {
    //console.log(store);
    store.avgPerHour = []
    store.subTotal = 0
    //console.log(store);
    let headingElement = document.createElement("h2")
    headingElement.textContent = store.location
    parent.appendChild(headingElement)
    for (let i = 0; i< hoursArray.length; i++) {

        let randomInt = getRandomInt(store.min, store.max);
        let salesPerHour = Math.floor(randomInt * store.avg)
        store.avgPerHour.push(salesPerHour);
        store.subTotal += salesPerHour
        let liElement = document.createElement("li")
        liElement.textContent = hoursArray[i]+": " + store.avgPerHour[i]+" Doughnuts"
        parent.appendChild(liElement)

    }
    let subTotalElement = document.createElement("li")
    subTotalElement.textContent = "Total: " +store.subTotal
    parent.appendChild(subTotalElement)
    console.log(store);
}

