# Big O Notation

![Alt text](./Big-O-Chart.png?raw=true "Title")

## Determining which is the best method for implementation

* Using Big O notation, we can have a numeric representation of the performance of code.
* Allows us to talk about how the runtime of an algorithm grows as the inputs grow.
* More Content

## Objects and Arrays => Big O
* Objects are fast at pretty much everything but there's no order to them .
* Arrays are great when you need an order but still be mindful that it's better if you can do it to add and remove from the end and avoid adding and removing from the beginning because that starts a cascade effect. Hence the term shift and unshift and everything else to be indexed.
*  The same goes to adding and removing from the middle. You can to start another cascade and things can get very indexed after whatever you added or removed.

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

### Best to worst.
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

![Alt text](./BigO-cheat-sheet-1.png?raw=true "Title")