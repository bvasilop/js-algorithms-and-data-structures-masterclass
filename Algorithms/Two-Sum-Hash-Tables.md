# Two Sum Algorithm using Hash Tables

## Our two sum function which will return all pairs in the array that add up to a given sum

### Brute Force Naive Solution O(n^2)

    function twoSum(numArray, sum) {

      var pairs = [];

      // check each element in array
      for (var i = 0; i < numArray.length; i++) {

        // check each other element in the array
        for (var j = i + 1; j < numArray.length; j++) {

          // determine if these two elements add up to sum
          if (numArray[i] + numArray[j] === sum) {
        pairs.push([numArray[i], numArray[j]]);
          }

        }

      }

      // return all pairs of integers that add up to sum
      return pairs;

    }

    twoSum([3, 5, 2, -4, 8, 11], 7);

### Better Solution O(n)

    function twoSum(numArray, sum) {

    var pairs = [];
    var hashTable = {};

    // check each element in array
    for (var i = 0; i < numArray.length; i++) {
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

    twoSum([2, 4, 6, 8, 2, 8], 10);