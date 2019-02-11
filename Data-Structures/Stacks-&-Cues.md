# Stacks and Queues

* Both are linear data structures
* Allow us to traverse data elements sequentially one by one in which only one data element can be directly reached.
* You mainly use stacks and queues to run commands like push, peek, pop. All of which deal exclusively with the element at the beginning or the end of the data structure.

## Stacks

![Stacks](./Stacks.png?raw=true "Stacks")

* **LIFO** -- Last in...first out
* **lookup** O(n)
* **pop** O(1)
* **push** O(1)
* **peek** O(1)

### Examples of Stacks

#### Store the previous state of your work in memory in such an order that the last one appears first

* Execution stack in JavaScript (Functions)
* Back button in browser
* Undo

## Queues

![Queues](./Queues.png?raw=true "Queues")

* **FIFO** -- First in...first out
* **lookup** O(n)
* **enqueue** O(1) --add to first person in queue
* **dequeue** O(1) -- remove first person from line
* **peek** O(1)

### Examples of Queues

* Wait list or wait room in an application
* Queue for purchasing items like tickets
* Chatrooms
* Reservations
* Uber/Lyft (ride sharing apps)(priority given to first in line)
* Printing

### Why would you not want to use an Array to build a Queue

* it's very inefficient because we're removing the first item from the list. If you shift something, you remove the first item you're going to have to shift all of the indexes

### How do we create a stack data structure that has peak, push and pop?

[Udemy course video](https://www.udemy.com/master-the-coding-interview-data-structures-algorithms/learn/v4/t/lecture/12333106?start=0)

```
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0; // if stack is empty, top and bottom point to the same node
  }
  peek() {
    return this.top; // very top item // returns null
  }
  push(value){
    const newNode = new Node(value); // use instantiated Node class from above with value we want to push with
    if (this.length === 0) { // if empty
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;// change pointer to top
      this.top = newNode;
      this.top.next = holdingPointer; // the old top is going to be right after our new Node
    }
    this.length++; // increment length by 1
    return this; // returns linked List
  }
  pop(){
    if (!this.top) { // if it doesn't exist
      return null;
    }
    if (this.top === this.bottom) { // if there's only 1 node on list
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--; // decrease length by one
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


//Discord
//Udemy
//google
```

### How do we create a stack data structure that implements array methods?

[Udemy course video](https://www.udemy.com/master-the-coding-interview-data-structures-algorithms/learn/v4/t/lecture/12334318?start=0)

```
class Stack {
  constructor(){
    this.array = []; // create empty array
  }
  peek() {
    return this.array[this.array.length-1]; // want to see very end of array
  }
  push(value){
    this.array.push(value); // add value to end of array
    return this;
  }
  pop(){
    this.array.pop(); // remove from end of array
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


//Discord
//Udemy
//google
```
