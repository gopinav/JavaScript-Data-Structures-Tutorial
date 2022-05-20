class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log(
        `Cannot insert at index ${index} for list of size ${this.size}`
      );
    } else {
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let curr = this.head;
        let prev = null;
        let i = 0;
        while (i < index) {
          prev = curr;
          curr = curr.next;
          i++;
        }
        prev.next = node;
        node.next = curr;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    let value;
    if (this.isEmpty() || index < 0 || index > this.size) {
      return null;
    } else {
      if (index === 0) {
        value = this.head.value;
        this.head = this.head.next;
      } else {
        let i = 0;
        let curr = this.head;
        let prev = null;
        while (i < index - 1) {
          prev = curr;
          curr = curr.next;
          i++;
        }
        value = curr.value;
        prev.next = curr.next;
      }
      this.size--;
    }
    return value;
  }

  removeElement(value) {
    if (this.isEmpty()) {
      return;
    } else {
      if (this.head.value === value) {
        if (!this.head.next) {
          this.head = null;
        } else {
          this.head = this.head.next;
        }
      } else {
        let curr = this.head;
        let prev = null;
        while (curr && curr.value !== value) {
          prev = curr;
          curr = curr.next;
        }
        if (!curr) {
          return;
        }
        prev.next = curr.next;
      }
      this.size--;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverseList() {
    let prev = null;
    let next = null;
    let curr = this.head;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value} `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const l = new LinkedList();
console.log(l.isEmpty());
l.append(50);
l.prepend(20);
l.append(80);
l.insert(60, 2);
console.log(l.getSize());
l.print();
l.reverseList();
l.print();
console.log(l.search(60));
l.removeFrom(4);
console.log(l.getSize());
l.print();
l.removeElement(80);
l.print();
console.log(l.getSize());
l.print();
