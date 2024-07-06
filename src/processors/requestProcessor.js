const axios = require('axios');

function processRequest(queue) {
  const request = queue.dequeue();
  if (request) {
    return axios({
      method: request.method,
      url: request.url,
      data: request.data
    })
    .then(response => {
      console.log(`Request processed successfully: ${request.url}`);
      return response.data;
    })
    .catch(error => {
      console.error(`Error processing request: ${error.message}`);
      return null;
    });
  } else {
    console.log('Queue is empty');
    return Promise.resolve(null);
  }
}

module.exports = { processRequest };


 