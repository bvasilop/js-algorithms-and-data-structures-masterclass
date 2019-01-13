# Two Arrays Common Items Algorithm

## *Given two arrays, create a function that let's users know (true/false) whether the two arrays contain common items.*

**Ex.**

    const array1 = ['a', 'b', 'c', 'x'];
    const array2 = ['z', 'y', 'i']
    // should return false


    const array1 = ['a', 'b', 'c', 'x'];
    const array2 = ['z', 'y', 'x'];
    // should return true

    // 2 parameters
    // return true or false

### Questions to ask interviewer

#### 1. How large is this array going to get?

   *If interviewer says array is never going to be larger than 5 items, then we don't need to worry about Big O space or time complexity
    If inputs are going to be larger, ask interviewer if they are looking for efficiency or saving memory*

#### Start solving with naive/brute force(easy) approach. Talk about it before coding

  *In this case talk about nested loop by comparing 'a' with 'z' ... two for loops nested on top of each other. O(n^2). Prob not best solution. Just a way to let the interiewer know that this works but not the most efficient.
    talk about why it's not the best solution*

    const array1 = ['a', 'b', 'c', 'x'];
    const array2 = ['z', 'y', 'x',];

    function containsCommonItem(array1, array2) {
      for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
          if (array1[i] === array2[j]) {
          return true;
          }
        }
      }
      return false
      }
      containsCommonItem(array1, array2); // true // brute force nested loop approach // Time Complexity Big O(a*b) Big O(n^2) // Space Complexity O(1) -- not creating any new varaibles, just using the inputs

### Better solution

#### Try using hashtables (objects) instead

    const array1 = ['a', 'b', 'c', 'x'];
    const array2 = ['z', 'y', 'x'];

    array1 ==> obj { // (converted array1 to an object)
      a: true,
      b: true,
      c: true,
      x: true
    }

#### We can now use the obj to compare with array2 and see if a property exists. Therefore eliminating the need for a second or nested loop

    array2[index] === obj.properties
      // common solution when trying to improve time complexity

    function containsCommonItem2(array1, array2) {
      // loop through first array and create obj where properties === items in the array
      let map = {}; // create object
      for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) { // In JS, boolean must be true to continue with code. That's why we do the opposite of !false here// check if prop 'a', 'b',...exists
        const item = array1[i];
        map[item] = true;
        }
      }
      console.log(map);

    // loop through second array and check if item in second array exists in created object

      for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]) { // if map index does contain props, return true
          return true
        }
      }
      return false
    }
    containsCommonItem2(array1, array2); // true
      { a: true, b: true, c: true, x: true }
    // Big O(a + b) O(n)
    // Time Complexity is better

    // Space Complexity O(n) -- creating a new object, and storing props

### Once completed, think of ways that code can break

* Can we assume always 2 parameters?
    1. containsCommonItem2(array1, null) breaks the code

* Consider using if statement as checks for testing
    1. Problem with this solution is since we're using an object with added props, only numbers, strings and booleans can be used correctly

### Cleaner approach using built in Array helper methods

    function containsCommonItem3(array1, array2) {
      return array1.some(item => array2.includes(item)) // loop through array
      }
    containsCommonItem3(array1, array2); // true
