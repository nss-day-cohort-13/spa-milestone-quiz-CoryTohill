// *******************************************************
//                        Load JSON
// *******************************************************

var CarLot = (function (carlot) {


  var inventory = [];

  carlot.getInventory = function () {
    return inventory;
  };

  // fill inventory with data from JSON when it loads and then passes the inventory into a callback function
  carlot.loadInventory = function (callback) {
    var inventoryLoader = new XMLHttpRequest();
    inventoryLoader.open("GET", "inventory.json");
    inventoryLoader.send();
    inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText);
      callback(inventory);
    });
  };


  return carlot;

})(CarLot || {});
