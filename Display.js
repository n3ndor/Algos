class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
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
        return this.head;
    }

    contains(value) {
        let runner = this.head;
        while (runner !== null) {
            if (runner.data === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    length() {
        let runner = this.head;
        let count = 0;
        while (runner !== null) {
            count++;
            runner = runner.next;
        }
        return console.log(count)
    }

    display() {
        let runner = this.head;
        let values = [];
        while (runner !== null) {
            values.push(runner.data);
            runner = runner.next;
        }
        return console.log(values.join(', '))
    }
}

let SLL1 = new SLL()
SLL1.addFront(76)
SLL1.addFront(2)
SLL1.display()
SLL1.addFront(11.41)
SLL1.display()