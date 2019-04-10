# Common Algorithms

## Reverse a String

```javascript
function reverse(str) {
  if (!str ||  typeof str !== 'string'  || str.length < 2) {
    return 'please enter a valid string';
  }
  str = str.toLowerCase()
  const backwards = [];
  let totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    currentLetter = str[i];
    backwards.push(currentLetter);
  }
  return backwards.join('');

}

reverse('wooooohoooo'); // => 'oooohooooow' // O(n) Time Complexity
```

```javascript
const reverse2 = str.split('').reverse().join('');
reverse2('yipeeee'); // 'eeeepiy' // O(n) Time Complexity
```

```javascript
const reverse3 = str => str.split('').reverse().join('');
reverse3(str); // 'eeeepiy' // O(n) Time Complexity
```

```javascript
const reverse5 = str => [...str].reverse().join('');
reverse5('yippeeeee'); //'eeeeeppiy' // O(n) Time Complexity
```

## Reverse a String in Place

```javascript
function reverse(str) {

  str = str.toLowerCase().split('');

  for (let i = 0; i < str.length / 2; i++) {
    let currentLetter = str[i];

    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = currentLetter;
    }
  return str.join('');
}
reverse('Hello World'); // => 'dlrow olleh'
```

## Two Sum Algorithm (Google Interview ? -- True/False)

### Brute Force - Nested Loops

```javascript
const arr1 = [2, 4, 6, 8]
const sum = 10;

function hasPairWithSum(arr, sum) {
  const len = arr.length;
  for (let i = 0; i < len-1; i++) {
    for (let j = 0; j < len; j++) {
      if(arr[i] + arr[j] === sum)
      return true;
    }
  }
  return false;
}
hasPairWithSum(arr1, sum); // true // O(n^2) Time Complexity
```

### Hash Tables

```javascript
const hashtable = {};

function hasPairWithSum2(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let counterpart = sum - currentNum;

    if (hashtable[counterpart]) {
      return true;
    }
    hashtable[currentNum] = currentNum;
  }
    return false;
}

hasPairWithSum2([2, 4, 6, 8], 10); // true // O(n) Time Complexity
```

## Two Sum Algorithm - Return Pairs that Equal Sum

### Brute Force - Nested Loops

```javascript
function twoSum(arr, sum) {
  if(!arr || !sum || typeof arr !== 'object' || typeof sum !== 'number' || arr.length < 2) {
    return 'not a valid input';
  }

  const pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] === sum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    if (pairs === undefined || pairs.length === 0) {
     return false;
    }
  return pairs;
}
twoSum([2, 4, 6, 8], 10); // => [ [ 2, 8 ], [ 4, 6 ] ] // O(n^2) Time Complexity
```

### Hash Tables

#### Using traditional for loop

```javascript
function twoSum2(arr, sum) {

  if (!arr || !sum || typeof arr !== 'object' || typeof sum !== 'number' || arr.length < 2) {
  return 'please enter valid input values';
}
  const pairs = [];
  const hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let counterpart = sum - currentNum;

    if(hashtable[counterpart] !== undefined) {
      pairs.push([currentNum, counterpart])
    }
    hashtable[currentNum] = currentNum;
  }
  return pairs;
}

twoSum2([2, 4, 6, 8], 10) // => [ [ 6, 4 ], [ 8, 2 ] ] // O(n) Time Complexity
```

#### Using for of loop

```javascript
const twoSum = (arr, sum) => {
  const map = {};
  const pairs = [];
    for (let currentNum of arr) {
      let counterpart = sum - currentNum;
      if (map[counterpart] !== undefined) {
        pairs.push([currentNum, counterpart]);
      }
      map[currentNum] = currentNum;
    }
    return pairs;
};
twoSum([2, 8, 3, 4], 10); // => [2, 8]
```

#### Return indexes

```javascript
const twoSum = (nums, target) => {
  const map = {};
    for (num of nums) {
    let counterpart = target - num;
    if(map[counterpart] !== undefined) {
      return [nums.indexOf(counterpart), nums.indexOf(num)];
    }
    map[num] = num;
  }
};
twoSum([1, 6, 4 , 5, 3, 3], 7); // [ 0, 1 ]
```

## Is Palindrome

### Store in Array

```javascript
function isPalindrome(str) {

const string = str.toLowerCase();
const charactersArr = string.split('');

const validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

const lettersArray = [];

for (let i = 0; i < charactersArr.length; i++) {
  let currentLetter = charactersArr[i];

  if (validChars.indexOf(currentLetter) > -1) {
    lettersArray.push(currentLetter);
  }
}

return lettersArray.join('') === lettersArray.reverse().join('');

}

isPalindrome(`Madam I'm Adam`); // True // O(n) Time Complexity
```

### Is Palindrome with Integers

```javascript
var isPalindrome = function(nums) {
  const reverse = parseInt(nums.toString().split('').reverse().join(''));
    return nums === reverse
  };

isPalindrome(121); //true
```

### Is Palindrome using Filter Method

```javascript

const isPalindrome = (str) => {
   str = str.toLowerCase()
  .split('')
  .filter(str => str >= 'a' && str <= 'z')
  .join('');

  return str === str.split('').reverse().join('');
};
isPalindrome(`Madam I'm Adam`);
```

### Is Palindrome with Integers without using API libraries (faster runtime)

```javascript
var isPalindrome = function(x) {
    if ( x < 0 || (x % 10 === 0 && x !== 0) ) {
        return false;
    }
    var reverse_x = 0;
    while(x > reverse_x) {
        reverse_x = reverse_x * 10 + x % 10;
        if (reverse_x === x) {
            return true;
        }
        x = Math.floor(x / 10);
    }
    return reverse_x === x;
};
isPalindrome(121); //true
```

## Is an Anagram

### Hash Tables

#### Standard for loop

```javascript
function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let currentLetter = first[i];
    !lookup[currentLetter] ? lookup[currentLetter] = 1 : ++lookup[currentLetter];

  }
  for (let j = 0; j < second.length; j++) {
    let currentLetter = second[j];
    if (!lookup[currentLetter]) {
      return false;
      } else {
      lookup[currentLetter] -= 1;
    }
  }
  return true;
}
isAnagram('anagram','nagaram'); // true // O(n) Time complexity
```

#### For of loop

```javascript
const isAnagram = (first, second) => {
  if(first.length !== second.length) {
    return false;
  }
const lookup = {};
  for (let currentLetter of first) {
    !lookup[currentLetter] ? lookup[currentLetter] = 1 : ++lookup[currentLetter];
  }
  for (let currentLetter of second) {
    if (!lookup[currentLetter]) {
      return false;
  }
    --lookup[currentLetter];
}
return true;
};
isAnagram('anagram', 'nagaram'); // true // O(n) Time complexity
```

## Return Reversed Array in PLace

```javascript
function returnArrayinPlace(arr) {

  if (!arr || typeof arr !== 'object' || arr.length < 2) {
    return 'please enter valid input values';
  }

  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];

    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = tempVar;

  }
  return arr;
  }

  returnArrayinPlace(['the', 'cow', 'jumped', 'over', 'the', 'moon']);
  // => [ 'moon', 'the', 'over', 'over', 'the', 'moon' ] // O(n) Time Complexity
  ```

## Find most Common Character in a Word

### Hash Tables

```javascript
function mostFrequentChar(str) {
  str = str.toLowerCase().split('');
 const map = {};
 let mostFrequentEl = str[0];

 for (let i = 0; i < str.length; i++) {
   let currentLetter = str[i];

    !map[currentLetter] ? map[currentLetter] = 1 : ++map[currentLetter];

    if (map[currentLetter] > map[mostFrequentEl]) {
      mostFrequentEl = currentLetter;
    }
 }
 return mostFrequentEl;
 }
mostFrequentChar('Hello World'); // 'l' // O(n) Time Complexity
```

#### Using for of loop instead of traditional for loop

```javascript
const mostFrequentChar = (str) => {
  str = str.toLowerCase().split('');

  const map = {};
  let mostFrequentEl = str[0];
    for (let currentLetter of str) {
      !map[currentLetter] ? map[currentLetter] = 1 : ++map[currentLetter];
        if(map[currentLetter] > map[mostFrequentEl]) {
          mostFrequentEl = currentLetter;
        }
    }
    return mostFrequentEl;
};
mostFrequentChar('Hello World'); // 'l'
```

### Given a List of Integers, find the most frequently occurring integer in the list

```javascript
const arr = [1,1,2,3,3,3,3,4,5,5,10]; // return [ 3 ]

const mostCommon = (arr) => {
 if (arr.length < 1 ) {
     return null;
 }
    const map = {};
    let mostFrequentNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      let currentNum = arr[i];
        !map[currentNum] ? map[currentNum] = 1 : ++map[currentNum];
        // 1. Current has higher count than known max
        if(map[currentNum] > map[mostFrequentNum]) {
        mostFrequentNum = currentNum;
       }
    }
    return mostFrequentNum;
};
mostCommon(arr); // return 3
```

## Count Unique Values in a Sorted Array

### Nested Loops

```javascript
function countUniqueValues(arr){
  if (arr.length === 0)
  return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {

      if(arr[i] !== arr[j]) { // compare arrindex of i and arr index of j (not equal to each other)
      // if they're not equal, we move the j pointer ahead in the array

      i++; // adds one to i (moves i pointer forward)

      arr[i] = arr[j];
      }

  }
  return i + 1; // we want to start at 1 when we're counting
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2 // O(n^2) Time Complexity
```

## Given two arrays, create a function that let's users know (true/false) whether the two arrays contain common items

### Brute Force - Nested Loop

```javascript
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
containsCommonItem(array1, array2); // Time Complexity Big O(a*b) Big O(n^2) // Space Complexity O(1) -- not creating any new varaibles, just using the inputs
```

### Hash Tables

```javascript
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// array1 ==> obj { // (converted array1 to an object)
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }

// we can now use the obj to compare with array2 and see if a property exists. Therefore eliminating the need for a second or nested loop.
//   array2[index] === obj.properties
//     common solution when trying to improve time complexity

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


  loop through second array and check if item in second array exists in created object

  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) { // if map index does contain props, return true
      return true
    }
  }
  return false
  }

containsCommonItem2(array1, array2); // true
```

## Given an array, return the first recurring character

### Brute Force - Nested Loops

```javascript
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) { // start at 1 (j = 1) so we compare 2 to 5 in array. Skipping   1 loop
    // we do i + 1 so we start to the right of 1
      if (input[i] === input[j]) {
      return input[i];
      }
    }
  }
  return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([1, 2]); // undefined // Time Complexity O(n^2), Space Complexity O(1) because we're not storing any objects
firstRecurringCharacter([2,5,5,2,3,5,1,2,4]); // in this case we return 2 because of the way we are looping 2-5, 2-5, 2-2, etc
```

### Using Hash Tables/Objects

```javascript
function firstRecurringCharacter2(input) {

let map = {};
  for (let i = 0; i < input.length; i++) {

    if(map[input[i]] !== undefined) {// if map is empty // if key exists , stop looping and return the value
    // if(0) is falsy and since type coercion. We must specify that it does not equal undefined. Once it does not equal undefined, return item.
    return input[i] // return item

    } else {
      map[input[i]] = i // otherwise we add it to our map
    }
    console.log(map); // { '2': 0 }{ '2': 0, '5': 1 } { '1': 2, '2': 0, '5': 1 }
  }
  return undefined
}
firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]); // 2 O(n) Time Complexity. Space Complexity O(n) because of object
firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]); // in this case we return 5 because of the way we are comparing all the values simultaneously
```

## Capitalize the First Letter of a String

```javascript
const myString = "hello world";

function capitalizeFirstLetter(string) {

    return myString.charAt(0).toUpperCase() + myString.slice(1);
}
capitalizeFirstLetter(myString); // 'Hello world' // O(n) Time Complexity
```

## FizzBuzz

### Using if/else Statements

```javascript
function fizzBuzz (num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
}
fizzBuzz(25); O(n) Time Complexity
```

### Using Switch Statements

```javascript
function fizzBuzz2(num) {
  for (let i = 1; i <= num; i++) {
    switch(true) {
      case (i % 15 === 0):
        console.log("Fizzbuzz");
        break;
      case (i % 3 === 0):
        console.log("Fizz");
        break;
      case (i % 5 === 0):
        console.log ("Buzz");
        break;
      default:
      console.log(i);
      break;
    }
  }
}
fizzBuzz2(25);
```

## Reverse A Singly Linked List

```javascript
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }

      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
    reverse() {
      if (!this.head.next) { // if next doesn't exist(only 1 item) no need to reverse, just  (!null returns true)
      // could also do if (this.length === 1)
        return this.head;
      }
      let first = this.head; // first item to reference
      this.tail = this.head; // the tail becomes the head (reversed after looping)
      let second = first.next; // reference to second item

      while(second) { // loop // as long as second has a value and is not null
        const temp = second.next; // create a temp variable that holds reference to the third item
        second.next = first; // grab second item and point to first item
        first = second; // the first var now becomes the the 2nd item in our node list
        second = temp; // the second variable becomes the 3rd item
      }
      // We've switched the pointers first item (1) to second (10) now goes (second item (10) to first (1)) then we switched the variables first and second to now have (second (10)) and (third (16)) and we loop through and do the same thing where we have the pointer (second (10)) to (third (16)) reversed so that (third (16)) points to (second (10)) and we changed a variable so that it's (third (16)) and (fourth (88)).

      this.head.next = null; // still has value of first item (1) in it (points to null)
      this.head = first; // this.head now becomes (first)
      // return this;
      return this.printList(); // [1, 10, 16, 88] becomes [88, 16, 5, 10]

      // After we loop through everything first becomes last and second becomes null. Also the tail becomes the first value (88) So we are now changing at the very end 88 to be equal to the head.
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.reverse()
```

## Create a Doubly Linked List

```javascript
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null // main difference with singly linked list is previous property
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null // main difference with singly linked list is previous property
    }
    console.log(newNode)
    newNode.prev = this.tail // add a prev property to equal whatever's at the end of the original list
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null // main difference with singly linked list is previous property
    }
    newNode.next = this.head;
    this.head.prev = newNode // add a prev property to equal whatever's at the end of the original
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null // main difference with singly linked list is previous property
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next; // must grab reference to leader
    leader.next = newNode; // get leader to point to the new node
    newNode.prev = leader; // add a prev property to equal whatevers at the end of the original // new node now points to the leader
    newNode.next = follower; // must grab reference to follower // new node now points after it to the follower
    follower.prev = newNode; // follower is now going to point to the new node
    this.length++;
    console.log(this)
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.reverse() // => [ 88, 16, 99, 10, 1 ]
```