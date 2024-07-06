class RoundRobinQueue {
    constructor() {
      this.queue = [];
      this.current = 0;
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      if (this.queue.length === 0) {
        return null;
      }
      const item = this.queue[this.current];
      this.current = (this.current + 1) % this.queue.length;
      return item;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  module.exports = RoundRobinQueue;
  