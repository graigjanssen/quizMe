var utils = {
  toggleSelected: function(e){
    e.target.classList.toggle("selected");
  },
  removeSelected: function(className){
    var prevSelected = document.getElementsByClassName(className + ' selected');
    if (prevSelected.length){
      prevSelected[0].classList.remove('selected');
    }
  },
  setStyle: function(e, className){
    e.target.classList.add(className);
  },
  resetStyle: function(){
    for (var className in arguments) {
      var el = document.getElementsByClassName(arguments[className]);
      if (el.length) {
        el[0].classList.remove(arguments[className]);
      }
    }
  }
}

module.exports = utils;
