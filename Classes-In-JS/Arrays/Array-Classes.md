# Array Classes in JavaScript

## Arrays in javascript are just objects with integer based keys that act like indexes

    class MyArray {
      constructor() {
        this.length = 0;
        this.data = {};
      }
      get(index) {
      return this.data[index];
    }

      push(item) {
        this.data[this.length] = item;
        // adds item to 0 index
        // new item would be added at index 1 when push method is run
        this.length++; // new item index of 1
        return this.length;
      }

      pop() {
        const lastItem = this.data[this.length -1] // -1 to remove last item in array [index 1]
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
      }

      delete(index) { // pass in index as params
        const item = this.data[index];
        this.shiftItems(index);
        // remember in an array we'll have to delete the item then shift the index of all the other data types by one because we want to follow good coding practices using the idea of single responsibility principle.
      }

      shiftItems(index) { // pass in index as params
        for (let i = index; i < this.length -1; i++) { // start at index we want to do delete from (i =index), iterate through all the way to the end
      this.data[i] = this.data[i+1]; // take each item from data within  and add data that is right next to it [i+1]

      // ex. [0,2] if we start at index 0, new index 0 becomes 2. (shifting items to the left by one)
      }
    this.data[this.length-1]; // deletes last item
    this.length--; // decrement our length
      }
    }

    const newArray = new MyArray(); // MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }

    newArray.push('hi');
    newArray.push('you');
    newArray.push('!'); // gets deleted with pop()
    // newArray.pop();
    newArray.delete(0); // MyArray { length: 3, data: { '0': 'hi', '1': '!', '2': '!' } }
    newArray.push('are');
    newArray.push('nice');

    newArray.delete(1);

    console.log(newArray); // MyArray {length: 3, data: { '0': 'you', '1': 'are', '2': 'nice', '3': 'nice' } }
