const express = require('express');
const { routeRequest } = require('./router');
const logMetrics = require('./middleware/logMetrics');
const { processRequest } = require('./processors/requestProcessor');
const FIFOQueue = require('./queues/fifoQueue');
const PriorityQueue = require('./queues/priorityQueue');
const RoundRobinQueue = require('./queues/roundRobinQueue');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(logMetrics);

const fifoQueue = new FIFOQueue();
const priorityQueue = new PriorityQueue();
const roundRobinQueue = new RoundRobinQueue();

app.post('/api', (req, res) => {
  routeRequest(req, res, { fifoQueue, priorityQueue, roundRobinQueue });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Load balancer running on port ${PORT}`);
});

// Process requests from queues
setInterval(() => {
  processRequest(fifoQueue);
  processRequest(priorityQueue);
  processRequest(roundRobinQueue);
}, 1000);  


 