// *******************************************************
//               Add and Remove Card Styles
// *******************************************************

var CarLot = (function (carlot) {


  //tests an element and each of its parents to determine if it is, or exists inside of,
  // an element with class carCards. If it does, it also returns the carCards div the element is in
  function checkElementAndParentsForClass (element) {
    while (element !==  null){
      if (element.className && element.className.includes("carCards")) {
        return {
          bolean: true,
          selectedCard: element
        };
      };
      element = element.parentNode;
    };
    return {
      bolean: false
    };
  };


  // adds the selectedCarCard class to a car card when either a card, or any descendant of a card, is selected
  carlot.addSelectedCardStyles = function (element, color) {
    var selectedElement = checkElementAndParentsForClass(element);
    if (selectedElement.bolean) {
      selectedElement.selectedCard.classList.add("selectedCarCard");
      selectedElement.selectedCard.style.backgroundColor = color;
    };
  }


  // selects all car cards and if any have the selectedCarCard class, the class is removed
  carlot.removeSelectedCardStyles = function (element) {
    var carCards = document.getElementsByClassName("carCards");

    for (i = 0; i < carCards.length; i++) {
      if (carCards[i].className && carCards[i].className.includes("selectedCarCard")) {
        carCards[i].classList.remove("selectedCarCard");
        carCards[i].style.backgroundColor = "lightblue";
      };
    };
  };


 return carlot;

})(CarLot || {});
