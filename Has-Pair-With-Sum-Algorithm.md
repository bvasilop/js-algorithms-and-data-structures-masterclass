# Has Pair With Sum -- Common Google Interview Question

## Naive/Brute Force

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
    hasPairWithSum(arr1, sum); // true
---

## Better Approach

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

    function hasPairWithSum2(arr, sum) {
      const mySet = new Set();
      const len = arr.length;
        for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
        return true;
        }
        mySet.add(sum - arr[i]);
        }
      return false;
    }
    hasPairWithSum2(arr1, sum); // true