# Hash Functions

![Alt text](./hash-tables.png?raw=true 'Title')

![Alt text](./hash-vs-arrays.png?raw=true 'Title')

![Alt text](./hash-collisions.png?raw=true 'Title')

- **Hash function is used to convert the key (grapes) into a memory address and store both the key and value into this new numerical address**
- **A hash function is simply a function that generates a value of fixed length for each input that it gets.**
- **We give it an input and the function generates some random pattern.**

## Cons with using hash tables

- **Collision occurs when hash function randomly allocates a position in memory in the same location as a previous item**
- **Because of this collision we need a way to store both users somehow in this address space**
- **Linked Lists can occur as a result of collision**
- **With hash tables, we can't avoid collisions because we're dealing with data with limited memory**

- **We constantly just add despite our hash table that's really really fast.**

- **It is Costly just keep adding to the same memory space. Which slows down our ability to access or insert information because now if I want to check what's in this address space I have to go one two three four five and so on and so forth.**

- **When you have a collision it slows down reading and writing with a hash table with O(n/k) or O(n) where k is the size of your hash table.**

### Two common ways of dealing with collisions

- **Linked Lists, Separate Chaining, Open addressing**

**[Linked List Wiki](https://en.wikipedia.org/wiki/Hash_table)**

**[Open Hash Visualization](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)**

```javascript
let user = {
  age: 50,
  name: 'Bob',
  magic: true,
  scream: function() {
    console.log('ahhhh!');
  },
};

user.age; // O(1)
user.spell = 'abra cadabra'; // O(1)
user.scream(); // O(1) because you have access in memory (fast)
```

```javascript
const a = new Map(); // the difference between a map and an object is that a map allows you to save any data type as the key.
```

- **Another benefit of map is that it maintains insertion order so that when we loop through items in an object we have this maintained order**
- **The only difference is that it only stores the keys no values.**

## Set, Hash, Get, Keys methods

```javascript
class HashTable {
  constructor(size) {
    this.data = new Array(size); // this array holds our info for us // another way to instantiate an array in javascript
    // [['grapes', 10000]] // as our 'bucket' (where our data lives) for the grapes // first item in our array is an array
  }

  _hash(key) {
    // _ this is a private property. lets devs know they shouldn't be accessing this outside of private property
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      // grab the length of grapes (6)

      hash =
        (hash + key.charCodeAt(i) * i) % // add 0 from hash
        //charCodeAt gives us an integer between 0 and 65535 representing the UTF-16 code at a given index

        // in this case index(i) is the first index (g) from grapes--which provides a number * i (index) again to give us a unique number

        // we use the modulus operator to ensure this.data.length stays between 50 --HashTable(50)-- the size of our data --new Array(size)--

        this.data.length;
      // console.log(hash); // 0 14 8 44 48 23 // loops through grapes character by character, then generates a hash. Since hash constantly gets looped over it keeps generating hash numbers until it reaches the hash for completed grapes (23).
    }
    return hash; // O(1)
  }

  set(key, value) {
    let address = this._hash(key); // store this data that we're going to insert the key value in this address space that is created by our hash function and we give it the key of grapes.

    if (!this.data[address]) {
      // if doesn't exist

      this.data[address] = [];

      // this.data[address].push([key, value]); // then add data
      // console.log(this.data); // [ <23 empty items>, [ [ 'grapes', 10000 ] ], <26 empty items> ] // 23 spots plus 1 spot plus 26 spots = 50 total shelves in memory
    }

    this.data[address].push([key, value]); // else add onto the array
    return this.data; // => [ <23 empty items>, [ [ 'grapes', 10000 ] ], <26 empty items> ] // O(1)
  }

  get(key) {
    // we want to grab grapes and apples so we can use the get method here
    let address = this._hash(key); // to get address for where we want to go
    const currentBucket = this.data[address];
    // console.log(currentBucket); [ [ 'grapes', 10000 ], [ 'apples', 54 ] ] ] two items in the same spot because of 2 shelves.

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          // grab the first array then grab 0 index in the array (grapes) then next iteration grape apples and check against the key
          return currentBucket[i][1]; // [1] because we want to return the val 10000 // => 10000
        }
      }
    }

    return undefined; // if empty array or bucket // O(1)
  }

  keys() {
    // keys allows us to iterate through all the keys of our hash table
    // downside is having to loop through entire memory space to find the key. In this case using arrays is much easier( looping 3 times for grapes, apples, oranges) vs. 50 times for all memory shelves
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // loop through all 50 shelves // if there is data in shelf that we're looking for
        console.log(this.data[i][0][0]); // first [0] grabs outer array, second [0] grabs first index of inner array
        keysArray.push(this.data[i][0][0]); // pushes key from each iteration // => [ 'grapes', 'apples', 'oranges' ]
      }
    }
    return keysArray; // => [ [ 'grapes', 10000 ], [ 'apples', 54 ], [ 'oranges', 2 ] ]
  }
}

const myHashTable = new HashTable(50); // 50 shelves of memory space
// const myHashTable = new HashTable(2);
//myHashTable.set('grapes', 10000); // sets grapes as first index in the array and number of grapes as the second index in the array

//myHashTable._hash('grapes'); // 23 (space in memory) from 0 - 50
//myHashTable._hash('grapes'); // 13 (space in memory) from 0 - 50

myHashTable.set('grapes', 10000); // sets grapes as first index in the array and number of grapes as the second index in the array
myHashTable.set('apples', 54); // => [ <1 empty item>, [ [ 'grapes', 10000 ], [ 'apples', 54 ] ] ] // two items in the same space. If we increase new Hashtable(50) we get returned just the grapes array // [ [ 'grapes', 10000 ] ]
myHashTable.set('oranges', 2);
myHashTable.set('apples', 54);
myHashTable.keys(); // => [ [ 'grapes', 10000 ], [ 'apples', 54 ], [ 'oranges', 2 ] ] // => [ 'grapes', 'apples', 'oranges' ]

// myHashTable.get('grapes'); // retrieves the grapes and returns 10000 // [ [ 'grapes', 10000 ], [ 'apples', 54 ] ] // => 100

// myHashTable.get('apples'); // => 54

// We're putting items randomly in a shelf but when we retrieve them they are all in order.
```

- **In this case, objects may not be the best solution. Possibly using for in loops , but it's slow and there is no guaranteed order**
- **We're putting items randomly in a shelf but when we retrieve them they are all in order**
- **In this case, objects may not be the best solution. Possibly using for in loops , but it's slow and there is no guaranteed order**
- **Hash tables are great when you want quick access to certain values. This is why hash tables are so common databases.**
- **Keys are called indexes in an array. Advantages is we can select the key in a hash table but not in an array which we have to loop.**
- **Hash tables are kind of like a hack on top of an array that lets us use flexible keys.**
- **Downside of hash tables is no concept of order. in arrays, each item is placed next to each other on a shelf in memory. Hash tables are placed all over the place.**
