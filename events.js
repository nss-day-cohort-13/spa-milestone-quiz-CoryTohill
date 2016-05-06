var CarLot = (function (carlot) {


  //tests an element and each of its parents to determine if it is, or exists inside of,
  // a div with class carCards. If it does, it also returns the carCards div
  function isElementInACarCard (currentElement) {
    while (currentElement !==  null){
      if (currentElement.className && currentElement.className.includes("carCards")) {
        return {
          bolean: true,
          cardElement: currentElement
        };
      };
      currentElement = currentElement.parentNode;
    };
    return {
      bolean: false
    };
  };



  function cardSelectionActions () {

    if (isElementInACarCard(event.target).bolean) {
      isElementInACarCard(event.target).cardElement.style.borderWidth = "6px";
      isElementInACarCard(event.target).cardElement.style.backgroundColor = "aqua";
    };
  };


  carlot.activateEvents = function (element) {
    element.addEventListener("click", cardSelectionActions)
  };


 return carlot;

})(CarLot || {});
