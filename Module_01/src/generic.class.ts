class Queue<T> {
    private items: T[] = [];
    public quantity: number = 0;

    enqueue(item: T): void {
        this.items.push(item);
        this.quantity++;
    }

    dequeue(): T | undefined {
        if (this.quantity > 0) {
            this.quantity--;
        }
        return this.items.shift();
    }

    getNumberOfElements(): number {
        return this.quantity;
    }
}

const numberQueue = new Queue<number>();

numberQueue.enqueue(10);
numberQueue.enqueue(20);
numberQueue.enqueue(30);
numberQueue.enqueue(40);
numberQueue.enqueue(50);
numberQueue.enqueue(60);

// How many elements in the queue:
console.log("Number of elements:", numberQueue.getNumberOfElements()); // 2

console.log(numberQueue.dequeue());  // 10

const stringQueue = new Queue<string>();

stringQueue.enqueue("apple");
stringQueue.enqueue("banana");

console.log("Number of elements:", stringQueue.getNumberOfElements()); // 2

console.log(stringQueue.dequeue());  // apple
