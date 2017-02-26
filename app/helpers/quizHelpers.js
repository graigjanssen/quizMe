var axios = require('axios');

var helper = {
  getQuestions: function(params){
    console.log('helper function: ', params);
    return axios.get('http://localhost:3000/api/questions', {params: params})
    .then(function(response){
      return response.data;
    }).catch(function(error){
      console.log('Axios error: ', error);
    })
  }
}

module.exports = helper;
