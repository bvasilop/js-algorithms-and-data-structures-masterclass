# Frequency Counter Algorithm

* This pattern uses objects or sets to collect values / frequencies of values
* This can often avoid the need for nested loops or O(N^2) (O of N squared quadratic time --not so good -- because of the nested loops used) operations with arrays / strings

**Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of the values must be the same.**

## Example

```javascript
same([1,2,3], [4, 1, 9]) // true
same([1,2,3], [1, 9]) // false
same([1,2,1], [4, 4, 1]) // false (must be the same frequency)( 4 in here once and 1 in here twice)
```

## Simple Solution

### Example

```javascript
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false; // if the two arrays have different lengths, then we're done (false)
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // what is the index of 1 squared in this array?
    if(correctIndex === -1) { // if correct index is -1 (not in there, return false and we're done)
      return false;
    }
  arr2.splice(correctIndex, 1) // it removes 1 from the second array and returns true
  }
    return true;
}
same([1,2,3], [4, 1, 9]) // true because none of the return false conditions are accepted and it keeps moving to the final condition (return true)
same([1,2,3], [1, 9]) // false

// Time Complexity - N^2
// roughly a million operations!!
```

## Refactored Solution

### Example

```javascript
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {}; // will count the individual values in each array
  let frequencyCounter2 = {};

  for (let val of arr1) {

  // use for of for looping over an array or string -- val corresponds to each element in the array
  // for each val in each arr1 we're going to add one to the frequency counter if it's already in there or we're going to initialize it to 1. We then end up with an object of key val pairs

  frequencyCounter1[val] = (frequencyCounter2[val] || 0) + 1
  } // loop 1

  for (let val of arr2) {
  frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // loop 2 ( looping over 2 loops is vastly faster than nesting loops)

  console.log(frequencyCounter1); // { '1': 1, '2': 1, '3': 1 }
  console.log(frequencyCounter2); // { '1': 1, '4': 1, '9': 1 }

  for (let key in frequencyCounter1) { // looping over frequencyCounter1 after constructing it from above
    if(!(key ** 2 in frequencyCounter2)) { // Is that a key in frequencyCounter2? So, two squared is four. So is there any fours in our second object? (there is). So this part doesn't return false.
  return false;
  }

    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) { // do the values correspond between the frequencyCounter1 and the square val's of frequencyCounter2 There are 2 - 4's but the other values don't match
      return false;
  }
}
  return true;
}
same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]) // true
// Time complexity O(n) // Linear time -- Good!!
// 3(n) where (n) is the length of the array simplified to O(n)
// it also quick to access data in an object!!
```

## Key Takeaways

* Use on object.
* Use the object as a way to break down the contents of an array or string. Then then you're able to quickly compare that breakdown to how another object looks.
* So we had two arrays. We break them down into objects that sort of classify what's in those arrays and then we can compare those objects and this allows us to improve our code significantly.