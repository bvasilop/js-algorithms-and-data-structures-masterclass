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

* **FIFO** -- First** in...first out
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
* d