# Big O Notation

![Alt text](./Big-O-Chart.png?raw=true "Title")

![Alt text](./Big-O(n).png?raw=true "Title")

![Alt text](./Big-O(1).png?raw=true "Title")

## Determining which is the best method for implementation

* Using Big O notation, we can have a numeric representation of the performance of code.
* Allows us to talk about how the runtime of an algorithm grows as the inputs grow.
* More Content

## Objects and Arrays => Big O

* Objects are fast at pretty much everything but there's no order to them .
* Arrays are great when you need an order but still be mindful that it's better if you can do it to add and remove from the end and avoid adding and removing from the beginning because that starts a cascade effect. Hence the term shift and unshift and everything else to be indexed.
* The same goes to adding and removing from the middle. You can to start another cascade and things can get very indexed after whatever you added or removed.

![Alt text](./big-o-array-operations.png?raw=true "Title")

## Time Complexity

* Most common complexities: O(1), O(n), O(n²)
* Sometimes Big O expressions involve more complex mathematical expressions
* One that might appear often is the logarithm
  1. Logarithm is the inverse of exponentiation. So just like division and multiplication are a pair logarithms and exponent exponentiation are a pair.

          log  log base 2 of 8 equals 3
          log₂(8) = 3 => 2³ = 8
          log₂(value) = exponent => 2(exponent) = value

          We'll omit the 2 from log₂ because of formatting
          log === log₂

### Rule of thumb

* The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

* Logarithmic time complexity is great !!! O(log 𝚗)l

### Best to worst

#### *O(1) => O(log 𝚗) => O(n) => O(nlog 𝚗) => O(n²)*

* Certain search algorithms have logarithmic time complexity
* Efficient sorting algorithms involve logarithms
* Recursion sometimes involves logarithmic space complexity

* To analyze the performance of an algorithm, we use Big O notation
* Big O notation can give us a high level understanding of the time or space complexity of an algorithm
* Big O notation doesn't care about precision, only about general trends(linear?, quadratic?, constant?)
* The time or space complexity (as measured by Big O) depends on the algorithm, not the hardware used to run the algorithm
* Big O is basically measuring the number of operations that happen

## Space Complexity

### When a program executes, it has two ways to remember things

* Heap - where we store variables that we assign
* Stack - where we keep track of our function calls
  1) Stack overflow is an issue that occurs when dealing with memory

  2) What affects Space Complexity? (Variables, Data Structures Function Calls and Allocations)

---

* We look at the total size relative to the size of the input and see how much memory we are allocating (variables).

---

* As (n) grows if we're approaching infinity, the size of the input itself which is (n) is going to grow.

* Auxiliary space complexity refers to space required by the algorithm, not including space taken up by the inputs

* Most primitives (booleans, numbers, undefined and null) are constant space

* Strings require O(n) space (where n is the strings length)

* Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

      function sum(arr) {
        let total = 0;
          for (let i = 0; i < arr.length; i++) {
            total += arr[i]; // adding in each item in the array to the total variable
          }
      return total
      }
      sum([2, 4, 6]);  => 12
---

      function double(arr) {
        let newArr = [];
          for (let i = 0; i < arr.length; i++){
            newArr.push(2 * arr[i]);
          }
        return newArr;
      }
      double([2, 4]);  => [ 4, 8 ]

* As the array length grows in proportion to the length of the input, the space is directly proportional to the (n) input O(n) Space

## Big O(n^2) -- Quadratic Time

![Alt text](./Big-O(n^2).png?raw=true "Title")

* Nested loops

### *Log all pairs of an array*

    const boxes = [1 ,2, 3, 4, 5];


    function allPairsOfArray(array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
        console.log(array[i], array[j]);
        }
      }
    }

    allPairsOfArray(boxes);

---

    const arrayOfLetters = ['a', 'b', 'c',  'd', 'e'];

    function logAllPairs(array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          console.log(array[i], array[j]);
        }
      }
    }

    logAllPairs(arrayOfLetters);

    // Becomes O(n * n) === O(n^2)

---

### O(n * n) === O(n^2)

### *Different terms for different inputs*

    function compressBoxesTwice(boxes, boxes2) {
      boxes.forEach(function(boxes) {
        console.log(boxes);
      });

      boxes2.forEach(function(boxes) {
      console.log(boxes);
      });
    }

### O(a + b) any step that happens in the same indentation

### O(a * b) if they were indented or loops that  are nested

### Drop non dominant terms

* In the case of O(n^2 + 3n + n/2) n^2 is the dominant term so we drop the rest and keep 0(n^2) because of scalability.

* If n = 5, (5 * 5) is more dominant than (3 * 5) or (5 / 2). That's why we drop the rest and keep the most dominant

---

![Alt text](./BigO-cheat-sheet-1.png?raw=true "Title")

---

## O(n!) Factorial Time

* Rarely encountered
* The worst in terms of scalability of all Big O notation with the most expensive and steepest Time and Space complexity values
* Usually occurs we we use a nested loop for every single input (element) that we have

### *Example of O(n!)*

#### [example of O(n) stack overflow question](https://stackoverflow.com/questions/3953244/example-of-on)

## Three Pillars of Good Code

* Readability
* Speed (Time Complexity)
  1) Efficient
  2) Scales well
* Memory (Space Complexity)
  1) Usually a trade off. Speed usually uses more memory
  2) Less memory usually results in slower speed