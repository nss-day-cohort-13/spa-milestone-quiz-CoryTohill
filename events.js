// *******************************************************
//                     Event Handlers
// *******************************************************

var CarLot = (function (carlot) {


  function cardSelectionActions () {
   carlot.removeSelectedCardStyles(event.target);
   carlot.addSelectedCardStyles(event.target);
  };


  carlot.activateEvents = function (element) {
    element.addEventListener("click", cardSelectionActions)
  };


 return carlot;

})(CarLot || {});
