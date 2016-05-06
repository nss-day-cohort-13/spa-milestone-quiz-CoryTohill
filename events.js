var CarLot = (function (carlot) {


  //tests an element and each of its parents to determine if it is, or exists inside of,
  // a div with class carCards. If it does, it also returns the carCards div the element is in
  function checkElementAndParentsForClass (element, nameOfClass) {
    while (element !==  null){
      if (element.className && element.className.includes(nameOfClass)) {
        return {
          bolean: true,
          selectedCardElement: element
        };
      };
      element = element.parentNode;
    };
    return {
      bolean: false
    };
  };

  // creates an array of a specified element and all its siblings;
  // if any elements have the specified class, the class is removed
  function removeClassFromElementAndSiblings (element, nameOfClass) {
    var carCardsArray = element.parentNode.childNodes;

    for (i = 0; i < carCardsArray.length; i++) {
      if (carCardsArray[i].className && carCardsArray[i].className.includes(nameOfClass)) {
        carCardsArray[i].classList.remove(nameOfClass);
      };
    };
  };


  function cardSelectionActions () {
    var selectedElement = checkElementAndParentsForClass(event.target, "carCards");

    removeClassFromElementAndSiblings(selectedElement.selectedCardElement, "selectedCarCard");

    if (selectedElement.bolean) {
      selectedElement.selectedCardElement.classList.add("selectedCarCard");
    };
  };


  carlot.activateEvents = function (element) {
    element.addEventListener("click", cardSelectionActions)
  };


 return carlot;

})(CarLot || {});
