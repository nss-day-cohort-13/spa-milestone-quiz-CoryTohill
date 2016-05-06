var containerDiv = document.getElementsByClassName("container");


// function that will apply initial unique stylings to all car cards based on car color
function styleCarCards (inventory) {
  var carCards = document.getElementsByClassName("carCards");

  for (i = 0; i < carCards.length; i++) {
    carCards[i].style.border = `2px solid ${inventory.cars[i].color}`;
  };
};


function populatePage (inventory) {
  var HTMLBuilder = "";

  // Loop over the inventory and populate the page
  for (i = 0; i < inventory.cars.length; i++) {
    var currentCar = inventory.cars[i];

    HTMLBuilder += `<div class="carCards">`
                + `<h1 class="make">${currentCar.make}</h1>`
                + `<h2 class="model">${currentCar.model}</h2>`
                + `<h2 class="year">${currentCar.year}</h2>`
                + `<p class="color">${currentCar.color}</p>`
                + `<p class="description">${currentCar.description}</p>`
                + `<h2 class="price">${currentCar.price}</h2>`
                + `<p class="purchased">${currentCar.purchased}</p>`
                + `</div>`;
  };
  containerDiv[0].innerHTML = HTMLBuilder;
  styleCarCards(inventory);

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
};


// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

