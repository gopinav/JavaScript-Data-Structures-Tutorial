class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enque(ele) {
    if (this.rear % this.size === 0) this.rear = 0;
    if (this.front % this.size === 0) this.front = 0;
    if (!this.items[this.rear]) {
      this.items[this.rear] = ele;
      this.rear += 1;
    }
  }

  deque() {
    const returnVal = this.items[this.front];
    delete this.items[this.front];
    this.front += 1;
    return returnVal;
  }

  print() {
    console.log(this.items);
  }

  peek() {
    return this.items[this.front];
  }
}
