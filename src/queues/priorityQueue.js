class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    this.queue.push({ item, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    const element = this.queue.shift();
    return element ? element.item : null;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

module.exports = PriorityQueue;

 