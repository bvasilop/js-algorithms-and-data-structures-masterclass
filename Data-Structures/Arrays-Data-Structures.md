# Arrays

* List's that organize items sequentially. That means one after another in memory.
* Simplest and most widely used data structures.
* Stored in contiguous memory (in order).
* Smallest footprint of any data structure.
* Best choice for storing data and iterating over it. Especially if you know the indexes of the items you're storing.
* lookup O(1)
* push O(1)
* insert O(n)
* delete O(n)

      const strings = ['a', 'b', 'c', 'd'];
      // 4 items
      // on a 32 bit system that is we have 1 2 3 4 shelfs to store the letter A in zeros and ones.

      //  we just moved by four times for so four items and each item taking up four shelfs in our memory.

      // That means that we're using up 16 bytes of storage

      // push adds something at the end of an array
      strings.push('e'); // O(1)
      console.log(strings); // [ 'a', 'b', 'c', 'd', 'e' ]

      strings.pop(); // removes last item of array // O(1)
      console.log(strings); // [ 'a', 'b', 'c', 'd' ]

      strings.unshift('x'); // O(n) looping // because indexes shift // 5 operations to realign indexes
      console.log(strings); // [ 'x', 'a', 'b', 'c', 'd' ]

      strings.splice(2, 0, 'alien'); // O(n) // 2 is index starting position // 0 is delete count (how many items do we want to delete) // In this case we don't want to delete, we just want to add // 'alien' is item we want to add
      console.log(strings); // [ 'x', 'a', 'alien', 'b', 'c', 'd' ]

## Static and Dynamic Arrays

### Static Arrays

* Static arrays are fixed in size

### Dynamic arrays

* Allow us to copy and rebuild an array at a new location which with more memory.
* Dynamic array expands as you add more elements.
* If you have an array of 7 items and want to add to an 8th item to an existing array. * Dynamic arrays allocate 14 blocks of memory and paste this list plus the eighth item into that new location.
* Prograaming languages like JavaScript, Java and Python automatically allocate memory in this way like dynamic arrays (automatic resizing).
* Low level languages like C++ allow ways of managing memory (allow for tweaking to run faster) while higher level languages like JavaScript manage the memory allocation for you.

  * lookup O(1)
  * append* O(1) // similar to push command
  * insert O(n)
  * delete O(n)

   *can be O(n) because it loops, then copies the array and moves it to a new location. Doubles the amount of space allocation.
