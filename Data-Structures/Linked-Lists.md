# Linked Lists

* **Linked List is a data structure consisting of a group of vertices (nodes) which together represent a sequence.Under the simplest form, each vertex is composed of a data and a reference (link) to the next vertex in the sequence.**
* **Linked List and its variations are used as underlying data structure to implement List, Stack, Queue, and Deque ADTs**
* **It is a simple linear data structure,
    It has a range of potential applications as a list ADT e.g. student list, event list, appointment list, etc (albeit there are other more advanced data structures that can do the same (and more) applications better) or as stack/queue/deque ADTs**
* **It has interesting corner/special cases to illustrate the need for a good implementation of a data structure**
* **It has various customization options and thus usually this Linked List data structure is taught using Object-Oriented Programming (OOP) way.**
* **A list that is linked .Contains a set of nodes. Contains two elements. The value of the data you want to store. And a pointer to the next node in Line. First Node is the head, the last node is the tail.**
* **They are null terminated which signifies it's at the end of the list**
* **An element that links to the next element...that links to the next element...until you hit the last element that points to null**
* **They can be sorted or unsorted**
* **Nodes can contain all forms of data types**

## Doubly Linked Lists and Singly Linked Lists

* **get(i) — maybe a trivial operation, return ai (0-based indexing)**
* **search(v) — decide if item/data v exists (and report its position/index) or not exist (and usually report a non existing index -1) in the list**
* **insert(i, v) — insert item/data v specifically at position/index i in the list, potentially shifting the items from previous positions: [i..N-1] by one position to their right to make a space**
* **remove(i) — remove item that is specifically at position/index i in the list, potentially shifting the items from previous positions: [i+1..N-1] by one position to their left to close the gap**
* **The main difference between arrays and linked lists is that in an array an element or elements are indexed. if I wanted to go to an item at index 5 I can do that easily in an array. In a linked list, you start at the head and traverse the list until you get to the Item. You start from the head and you keep going until you hit Null**
* **We're going to have to use something like a WHILE loop when we implement our own linked lists because we don't usually know how long the list is going to be**
* **Iterating through a linked list or traversing through a linked list is usually quite a bit slower than iterating through items like an array O(n)**
* **Advantages of using a linked list over an array is you don't have to worry about index shifting.**
* **Advantages of using linked lists over hash tables is there is a sense of order where one pointer is pointing to the next node. So you can have sorted data unlike hash tables**

---

* **prepend O(1) -- add to beginning of linked list**
* **append O(1) -- add to end**
* **lookup O(n) -- traversal**
* **insert O(n)**
* **delete O(n)**

### Pointers

* **is a reference to another place in memory or another object or another node**

---

    const basket = ['apples', 'grapes', 'pears'];
    // how do we create a basket that's not an array but instead a linked list

    // linked list: apples(8947) --> grapes(8742) --> pears(372) --> null (--> signifies pointers)(Parentheses signifies memory space or location)

    // Why could Linked Lists be better than arrays or hash tables
---

    let obj1 = { a: true };
    let obj2 = obj1 // we've created a pointer. A reference to an object. The object here is not being copied but instead referenced


    console.log(obj1); // { a: true }
    console.log(obj2); // { a: true }

    obj1.a = 'boo';
    delete obj1; // even though we tried to delete. since it's still being referenced somewhere it is still held in memory because there is still a pointer to a location in memory (garbage collection -memory is managed automatically) If nothing is being pointed to it it is deleted.
    In low level programming languages, you have to manually manage referenced items in memory

    console.log(obj1); // { a: boo }
    console.log(obj2); // { a: boo }

### Linked List

#### 1-->10-->5–->16

    let myLinkedList = { // think of a node as a bucket of data. in this case our node is our object to put our data
      head: {
        value: 10, // value of the node
        next: {
          value: 5,
          next: {
            value: 16, // references tail
            next: null // end of list // null terminated
          }
        } // the pointer or reference to next node which in this case is another object
      }
    }

---

**1-->10-->5–->16**

    class LinkedList {
      constructor(value) {
        this.head = {
          value: value,
          next: null // because we're instantiating the     class first
        }
        this.tail = this.head;
        this.length = 1;
      }

      append(value) {
        const newNode = {
          value: value,
          next: null
        };
        this.tail.next = newNode; // grabs next value and     pointer and point to newNode
        this.tail = newNode; // update tail to be the new     node
        this.length++; // we add the length to equal 2    (nodes)
        return this; // so we get back our linked list
        }

        prepend(value) {
          const newNode = { // create empty node
            value: value,
            next: null
          };
          this.head.next = newNode; // we just created    pointer to head
          this.head = newNode; // update the reference
          this.length++; // increase length of our list
          return this;
        }
      }

    const myLinkedList = new LinkedList(10);

    myLinkedList.append(5); // => LinkedList {
    //   head: { value: 10, next: { value: 5, next: null } },
    //   tail: { value: 5, next: null },
    //   length: 2 }

    myLinkedList.append(16);//  => LinkedList {
    //   head: { value: 10, next: { value: 5, next: [Object]    } },
    //   tail: { value: 16, next: null },
    //   length: 3 }
    //console.log(myLinkedList);

    // myLinkedList.prepend(1); => LinkedList {
    //   head: { value: 1, next: null },
    //   tail: { value: 16, next: null },
    //   length: 4 }