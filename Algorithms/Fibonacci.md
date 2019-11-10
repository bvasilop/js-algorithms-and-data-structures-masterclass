# Fibonacci Sequence Algorithm

```javascript
function fibonacci(position) {}
```

- A Special sequence of numbers `1, 1, 2, 3, 5, 8, 13, 21, 34...`
  - first two numbers are `1, 1` and every number after that is the sum of the previous two numbers.
- This algorithm will heavily rely on recursion.
- We will be building out an algorithm called Fibonacci and it will take in a number called position as a parameter.
  - This position will indicate which number from the Fibonacci sequence we want returned to us and all we want to do is return that number.
  - Ex. `fibonacci(4); //returns 3`
  - Ex. `fibonacci(9); //returns 34`
- We know that every number in the Fibonacci Sequence is the sum of the two numbers before it. So we simply add the two previous numbers together to get the position we are looking for, but a problem for us is that we don't necessarily know what the previous two numbers in the sequence are.
- This is where **recursion** comes into play. So in our recursive case we will say

```javascript
else return fibonacci(position -1) + fibonacci(position -2);`
```

```javascript
function fibonacci(position) {
  if (position < 3) {
    return 1;
  } else return fibonacci(position - 1) + fibonacci(position - 2);
}
fibonacci(6); // we should expect 8 in the 6th position
```

- Each of these Fibonacci functions being called in our recursive case will keep calling itself until it reaches the base case in which both previous numbers are 1 and 1.Then the recursive case will start to unwind and build up the whole Fibonacci sequence until we reach the position that we originally passed in.
