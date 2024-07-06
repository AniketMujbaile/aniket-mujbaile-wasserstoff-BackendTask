class FIFOQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  module.exports = FIFOQueue;
  