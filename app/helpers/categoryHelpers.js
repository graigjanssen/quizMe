var axios = require('axios');

var helpers = {
  getAll: function() {
    console.log('axios go get categories...');
    return axios.get('/api/questions/categories')
    .then(function(response){
      console.log('axios response:', response.data);
      return response.data.categoryTotals;
    });
  }
}

module.exports = helpers;
