var utils = {
  toggleSelected: function(e){
    e.target.classList.toggle("selected");
  },
  setStyle: function(e, className){
    e.target.classList.add(className);
  }
}

module.exports = utils;
