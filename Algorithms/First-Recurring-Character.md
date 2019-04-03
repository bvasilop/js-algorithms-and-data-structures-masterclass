# First Recurring Character

## Common Google Question

### *Given an array, find the first recurring character*

* **Given an array [2, 5, 1, 2, 3, 5, 1, 2, 4]// It should return 2**

* **Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]: // It should return 1**

* **Given an array = [2, 3, 4, 5] // It should return undefined**

---

## Brute force O(n^2)

```javascript
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      // start at 1 (j = 1) so we compare 2 to 5 in array. Skipping 1 loop
        // we do i + 1 so we start to the right of 1
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}

//firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
//firstRecurringCharacter([1, 2]); // undefined // Time Complexity O(n^2), Space Complexity O(1) because we're not storing any objects

firstRecurringCharacter([2,5,5,2,3,5,1,2,4]); // in this case we return 2 because of the way we are looping 2-5, 2-5, 2-2, etc
```

## Using Hash Tables / Objects O(n)

```javascript
function firstRecurringCharacter2(input) {

let map = {};
  for (let i = 0; i < input.length; i++) {

    if(map[input[i]] !== undefined) {
      // if map is empty // if key exists , stop looping and return the value
      // if(0) is falsy and since type coercion. We must specify that it does not equal undefined. Once it does not equal undefined, return item.

return input[i] // return item
    } else {
  map[input[i]] = i // otherwise we add it to our map
    }
    console.log(map); // { '2': 0 }{ '2': 0, '5': 1 } { '1': 2, '2': 0, '5': 1 }
  }
  return undefined
}
firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);    // 2 O(n) Time Complexity. Space Complexity O(n) because of object
firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]); // in this case we return 5 because of the way we are comparing all the values simultaneously
```