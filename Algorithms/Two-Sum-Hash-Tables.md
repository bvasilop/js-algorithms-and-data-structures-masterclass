# Two Sum Algorithm using Hash Tables

## Our two sum function which will return all pairs in the array that add up to a given sum

### *Find all the pairs of two integers in an unsorted array that add up to a given sum*

### Brute Force Naive Solution O(n^2)

* **A naive approach to this problem would be to loop through each number and then loop again through the array looking for a pair that sums to S. The running time for the below solution would be O(n2) because in the worst case we are looping through the array twice to find a pair.**

---

    function twoSum(numArray, sum) {

      const pairs = [];

      // check each element in array
      for (let i = 0; i < numArray.length; i++) {

        // check each other element in the array
        for (let j = i + 1; j < numArray.length; j++) {

          // determine if these two elements add up to sum
          if (numArray[i] + numArray[j] === sum) {
        pairs.push([numArray[i], numArray[j]]);
          }

        }

      }

      // return all pairs of integers that add up to sum
      return pairs;

    }

    twoSum([4, 5, 1, 8], 6);

### Better Solution O(n)

* **We can write a faster algorithm that will find pairs that add up to sum in linear time. The algorithm below makes use of hash tables which have a constant lookup time O(1). As we pass through each element in the array, we check to see if the sum minus the current element (counterpart) exists in the hash table. We only need to loop through the array once, resulting in a running time of O(n) since each lookup and insertion in a hash table is O(1).**

### Example

* If the array is: [4, 5, 1, 8] and the sum is 6 the algorithm would proceed with the steps below:

* (1) The hash table is initially empty and the first element in the array is 4. We simply put 4 into the hash table.

* (2) The next element is 5. We check to see if the sum minus the current element (counterpart) exists in the hash table. 6 - 5 = 1 does not exist in the hash table. So add 5 to the hash table.

* (3) The next element is 1. We check to see if the sum minus the current element (counterpart) exists in the hash table. 6 - 1 = 5 does exist in the hash table so we found a pair

---

    function twoSum(numArray, sum) {

    const pairs = [];
    const hashTable = {};

    // check each element in array
    for (let i = 0; i < numArray.length; i++) {
      currentNum = numArray[i];

      // create a counterpart by calculating sum - current element
      let counterpart = sum - currentNum;

      // check if this number exists in hash table
      // if so then we found a pair of numbers that add up to sum
      if (hashTable[counterpart] !== undefined)   {
        pairs.push([currentNum, counterpart]);
      }

      // add the current number to the hash table
    hashTable[currentNum] = currentNum;

    }

    // return all pairs of integers that sum to S
    return pairs;

    }

    twoSum([4, 5, 1, 8], 6);