
"use strict";

let hoursArray = ['7am','8am', '9am', '10am', '11am', '12pm','1pm','2pm', '3pm,', '4pm', '5pm', '6pm', '7pm']

function Location(location, min, max, avg) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.location = location;
}

Location.prototype.render = function() {
    let root = document.getElementById("sales-data");
    let location = `${this.location}`
    let storeNameElm = document.createElement ("td");
    storeNameElm.textContent = location;
    root.appendChild(storeNameElm);

}

let seattleObject = new Location("Seattle", 23, 65, 2.3);

let tokyoObject = new Location("Tokyo", 3, 24, 1.2);

let dubaiObject = new Location("Dubai", 11, 38, 3.7);

let parisObject = new Location("Paris", 20, 38, 2.3);

let limaObject = new Location("Lima", 2, 16, 4.6);

seattleObject.render();
tokyoObject.render();
dubaiObject.render();
parisObject.render();
limaObject.render();

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

let tableElement = document.getElementById("sales");
let headingRow = document.getElementById("heading-row");
let headingRowElement = document.createElement("tr");

for (let i = 0; i < hoursArray.length; i++) {
  let tableDataElement = document.createElement("td");
  tableDataElement.textContent = hoursArray[i];
  headingRow.appendChild(tableDataElement);
}

let tableDataElement2 = document.createElement("td");
tableDataElement2.textContent = "Daily Location Total";
headingRow.appendChild(tableDataElement2);

for (let store of storesArray) {
    let bodyRowElement = document.createElement("tr");
    let tableDataElement3 = document.createElement("td");
    tableDataElement3.textContent = store.store;
    bodyRowElement.appendChild(tableDataElement3);
  
    for (let i = 0; i < store.salesPerHour.length; i++) {
      let TableData2Element = document.createElement("td");
      TableData2Element.textContent = store.salesPerHour[i];
      bodyRowElement.appendChild(TableData2Element);
    }
  

    let tableTotalElement = document.createElement("td");
    tableTotalElement.textContent = store.subTotal;
    bodyRowElement.appendChild(tableTotalElement);
    tableElement.appendChild(bodyRowElement);
  }
  
  let trElement = document.createElement("tr");
  let tdElement = document.createElement("td");
  tdElement.textContent = "Totals";
  tableElement.appendChild(trElement);
  trElement.appendChild(tdElement);
  

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
  
    for (let j = 0; j < storesArray.length; j++) {
      hourlyTotal += storesArray[j].salesPerHour[i];
      finalTotal += hourlyTotal;
    }
  
    let dataElement = document.createElement("td");
    dataElement.textContent = hourlyTotal;
    trElement.appendChild(dataElement);
  }
   
  let d2Element = document.createElement("td");
  d2Element.textContent = finalTotal;
  trElement.appendChild(d2Element);
  tableElement.appendChild(trElement);

  formElement.addEventListener("submit", handleSubmit);



// target a parent element
//create header row by looping through the hoursArray
//loop through storesArray
//create a row for each store



