var axios = require('axios');

var helpers = {
  getAll: function() {
    return axios.get('http://localhost:3000/api/questions/categories')
    .then(function(response){
      return response.data.categoryTotals;
    });
  }
}

module.exports = helpers;
