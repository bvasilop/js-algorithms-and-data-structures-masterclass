# Multiple Pointers Algorithm

* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
* Very efficient for solving problems with minimal space complexity as well

## Example

### *Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn't exist*

### Naive solution

    function sumZero (arr) {
      for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
          }
        }
      }
    }
    sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
    // sumZero([-2, 0, 1, 3]) // undefined
    // sumZero([1, 2, 3]) // undefined

    // Time Complexity - O(N^2) ----because of nested loops
    // Space Complexity - O(1)

### --Would benefit from a refactor using the multiple pointers pattern

    function sumZero(arr) { // two pointers
      let left = 0; // one starting at the left

      let right = arr.length -1; // the other starting at the last index in the array

      while(left < right) { // if condition is not met return undefined
      // has to be < 0 instead of <=0 to prevent false positives.
      // if it wasn't zero it could be any other number we subtract it by itself or subtract it from itself. We're going to get zero. So we have to stop there and that's why we have while left is less than right rather than less than or equal to right.

        let sum = arr[left] + arr[right]; // sum of arr val left + array val right

        if (sum === 0) { // if 0 then we're done

          return [arr[left], arr[right]]; // return as new array

        } else if(sum > 0) { // if sum is > 0, we subtract one from the right(index)

          right--; // subtract one from right and start over

        } else {

          left++; // if condition of not zero (> 0) is met then we add or move to the right from the beginning of the array
        }
      }
    }
    sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]) // [-3, 3]

    // Time Complexity - O(N) ----better
    // Space Complexity - O(1)