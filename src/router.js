const { processRequest } = require('./processors/requestProcessor');
const axios = require('axios');
const apiConfig = require('../config/apiConfig.json');

function routeRequest(req, res, queues) {
  const { fifoQueue, priorityQueue, roundRobinQueue } = queues;
  const { strategy, type, priority } = req.query;
  const { data } = req.body;

  const request = {
    method: 'POST',
    url: '',
    data,
    type
  };

  // Select the appropriate endpoint based on API type
  const api = apiConfig.apis.find(api => api.type === type);
  if (api) {
    request.url = api.endpoint;
  } else {
    return res.status(400).json({ error: 'Invalid API type' });
  }

  switch (strategy) {
    case 'fifo':
      fifoQueue.enqueue(request);
      break;
    case 'priority':
      if (!priority) {
        return res.status(400).json({ error: 'Priority is required for priority queue' });
      }
      priorityQueue.enqueue(request, Number(priority));
      break;
    case 'round-robin':
      roundRobinQueue.enqueue(request);
      break;
    default:
      return res.status(400).json({ error: 'Invalid strategy' });
  }

  res.status(200).json({ message: 'Request added to queue' });
}

module.exports = { routeRequest };

 