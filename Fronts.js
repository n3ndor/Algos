class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let newNode = new Node(value);
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this.head;  // return the new head of the list
    }
    removeFront() {
        if (!this.head) {
            return null;  // list is empty
        }
        this.head = this.head.next;  // update the head to be the next node
        return this.head;  // return the new head of the list
    }

    front() {
        if (!this.head) {
            return null;  // list is empty
        }
        return this.head.data;  // return the value of the head node
    }
}

// Example usage:
let SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
