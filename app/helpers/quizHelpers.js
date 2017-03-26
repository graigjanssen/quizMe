var axios = require('axios');

var helper = {
  getQuestions: function(params){
    return axios.get('/api/questions', {params: params})
    .then(function(response){
      return response.data;
    }).catch(function(error){
      console.log('Axios error: ', error);
    })
  },
  addQuestion: function(data) {
    return axios.post('/api/questions', data)
    .then(function(response){
      return response.data
    }).catch(function(error){
      console.log('Axios error: ', error);
    })
  }
}

module.exports = helper;
