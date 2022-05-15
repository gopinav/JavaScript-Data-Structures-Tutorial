class Stack {
  constructor() {
    this.items = {};
    this.head = 0;
  }

  push(element) {
    this.items[this.head] = element;
    this.head++;
  }

  pop() {
    const item = this.items[this.head - 1];
    delete this.items[this.head - 1];
    this.head--;
    return item;
  }

  peek() {
    return this.items[this.head - 1];
  }

  size() {
    return this.head;
  }

  isEmpty() {
    return this.head === 0;
  }

  print() {
    console.log(this.items);
  }
}
