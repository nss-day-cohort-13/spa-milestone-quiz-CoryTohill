// *******************************************************
//                     Event Handlers
// *******************************************************

var CarLot = (function (carlot) {

var userInput = document.getElementById("userInput");

  // all actions that will be run when a card is clicked on
  function cardSelectionActions () {
    carlot.removeSelectedCardStyles(event.target);
    carlot.addSelectedCardStyles(event.target, "aqua");
    userInput.value = "";
    userInput.focus();
  };

  // when user types in text input, the text will be inserted into the description of the card with the selectedCarCard class on it
  function editDescription () {
    var carCards = document.getElementsByClassName("carCards");

    for (i = 0; i < carCards.length; i++) {
      if (carCards[i].className && carCards[i].className.includes("selectedCarCard")) {
        var descriptionElement = document.getElementsByClassName("description");
        descriptionElement[i].innerHTML = userInput.value;
      };
    };
  };

  // adds event listerners
  carlot.activateEvents = function (element) {
    element.addEventListener("click", cardSelectionActions);
    userInput.addEventListener("keyup", editDescription);
  };


 return carlot;

})(CarLot || {});
