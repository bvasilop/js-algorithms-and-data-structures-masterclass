# Merge Sorted Arrays

## *Given two arrays that are sorted,  merge the two arrays into one sorted array.*

[Link to explainer video](https://www.udemy.com/master-the-coding-interview-data-structures-algorithms/learn/v4/t/lecture/12309366?start=0)

### If you have a function called mergeSortedArrays, give it two parameters with two sorted arrays [0, 3, 4, 31], [4, 6, 30]

### Create the new completely sorted array [0 3 4 4 6 30 31]

    const array1 = [0, 3, 4, 31];
    const array2 = [4, 6, 30];

    function mergeSortedArray(array1, array2) {

      const mergedArray = [];
      let array1Item = array1[0]; // grab first item in each array
      let array2Item = array2[0];
      let i = 1; // allows increment by one
      let j = 1;

        if (array1.length === 0) {
        return (array2);
        }

        if (array2.length === 0) {
        return (array1);
        }

        while (array1Item || array2Item) { // loop through while the items conditions are met
        // console.log(array1Item, array2Item);

        if (!array2Item === undefined || array1Item < array2Item) { // if no array2 item

        mergedArray.push(array1Item); // pushes 0 item in array
        array1Item = array1[i];
        i++; // increment through array

        } else {

        mergedArray.push(array2Item);
        array2Item = array2[j];
        j++;
        }
      }
      return mergedArray;
    }

    mergeSortedArray(array1, array2); // => [ 0, 3, 4, 4, 6, 30, 31 ]
