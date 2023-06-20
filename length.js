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

    length() {
        let runner = this.head;
        let count = 0;
        while (runner !== null) {
            count++;
            runner = runner.next;
        }
        return count;
    }
}