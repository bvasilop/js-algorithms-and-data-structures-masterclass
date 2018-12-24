# Two Sum Algorithm

    function twoSum(numArray, sum) {

      const pairs = []; // define an array to put all of our pairs into

      const hashtable = []; // we want to use a hash table and push every number we iterate through into that hash table
      // can use an array or an object if we wanted to. Both achieve the same functionality

      // On every iteration we want to check this hash table to see if the current numbers counterpart is present in that table.

      // If our current number is 4 (for example) and the number we are looking to sum up to is 7. The counterpart of four would be three because four and three add up to seven.

      // So if our current number is four we want to check our hash table to see if it's counterpart or 3 already exists in the hash table.

      // If the counterpart does exist in the hash table then we know that we have already iterated through that number in our array.

      // We can therefore take these two numbers as a pair and push them into our pairs array.

      for (let i = 0; i < numArray.length; i++) { // Next we want to loop through every number in our normal array to get access to every number in it.

      const currNum = numArray[i]; // define the current number that we are on in the array at position

      // So we have our current number defined here inside of our FOR loop.

      const counterpart = sum - currNum;  // Now we have to define its counterpart.

      if (hashtable.indexOf(counterpart) !== -1) { // Now we have to check our hash table to see if the counter-part exists in it.( if it exists in the table)

      pairs.push([currNum, counterpart]); // then we want to push our current number and its counterpart as a pair into our pairs array.
      }

      hashtable.push(currNum); // Then outside of this if statement we want to push the current number into the hash table no matter what.
      }

      return pairs;
    }

    twoSum([1, 6, 4 , 5, 3, 3], 7); // => [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]

    // Constant O(n) time complexity
---
    function twoSum(numArray, sum) {

      const pairs = [];
      const hashtable = [];

      for (let i = 0; i < numArray.length; i++) {

      const currNum = numArray[i];
      const counterpart = sum - currNum;

      if (hashtable.indexOf(counterpart) !== -1) {
        pairs.push([currNum, counterpart]);
      }

      hashtable.push(currNum);

      }

      return pairs;

    }
    twoSum([1, 6, 4 , 5, 3, 3], 7); // => [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]