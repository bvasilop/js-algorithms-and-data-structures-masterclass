# Count Unique Variables Algorithm

## *Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values array. There can be negative numbers in the array, but it will always be sorted.*

---

### Time Complexity - O(n)

### Space Complexity - O(n)

#### Bonus if can do O(1) Space and O(n) Time

#### *Solution using two pointers counting from the left and altering array to reflect unique values from left to right (change the order using two pointers i and j)*

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
          // console.log(i, j);

      }

      return i + 1; // we want to start at 1 when we're counting

    }

    countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2, -1, -1, 0, 1]) // 4