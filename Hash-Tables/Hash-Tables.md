# Hash Tables

## Hash Tables are known as Objects in JavaScript

- Known as **hash maps**, **maps**, **unordered maps**, **dictionaries**, **objects**

- Known as dictionaries in **Python**

- Known as maps in **Java**

- Known as hashes in **Ruby**

- Common interview questions

## Example

**We hash the key such as grapes through the hash function and places it automatically into the address space that it comes up with.**

### basket.grapes = 1000

- basket is the object
- grapes is the property on the object, basket
- grapes is the key and 1000 is the val from key val pair.
  1. in hash tables, the key (grapes) is used as the index of where to find the value in memory as opposed to arrays using a number as an index

#### hash function is used to convert the key (grapes) into a memory address and store both the key and value into this new numerical address

### Hash Functions

- **insert O(1)**
- **lookup O(1)**
- **delete O(1)**
- **search O(1)**

- A hash function is simply a function that generates a value of fixed length for each input that it gets.
  We give it an input and the function generates some random pattern.

#### Cons with using hash tables

- Collision occurs when hash function randomly allocates a position in memory in the same location as a previous item

- Because of this collision we need a way to store both users somehow in this address space. (Good collision resolution --usually computer -under-the-hood takes care of it for us)

- Linked Lists can occur as a result of collision
  with hash tables, we can't avoid collisions because we're dealing with data with limited memory

- We constantly just add despite our hash table that's really really fast.

- It is Costly just keep adding to the same memory space. Which slows down our ability to access or insert information because now if I want to check what's in this address space I have to go one two three four five and so on and so forth.

- When you have a collision it slows down reading and writing with a hash table with O(n/k) or O(n) where k is the size of your hash table.

- Two common ways of dealing with collisions
  Linked Lists, Separate Chaining, Open addressing

  **[Wiki Hash Tables](https://en.wikipedia.org/wiki/Hash_table)**

  **[Hash Table Animation](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)**

### Upside to Using Hash Tables

- **Fast lookups**
- **Fast Inserts**
- **Flexible Keys**

### Downside to using Hash Tables

- **Unordered**
- **Slow key iteration**
