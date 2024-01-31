// implement a funnction to to reverse a linked list in js




class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  }
  
  // Example :
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  console.log("Original Linked List:");
  linkedList.print();
  
  linkedList.reverse();
  
  console.log("\nReversed Linked List:");
  linkedList.print();
  