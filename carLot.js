var CarLot = (function (carlot) {
  var inventory = [];

  carlot.getInventory = function () {
    return inventory;
  };

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
