# Strings and Arrays

**In interviews you should treat any string questions as an array question.**

**Strings are simply an array of characters.**

## Example problem: create a function that reverses a string

### *Hi my name is Bill' should be 'lliB si eman ym iH'*

```javascript

const str = 'Hi my name is Bill';
```

```javascript
function reverse(str){
  // check input in case you're given something other than a string(undefined, null, etc, number, ...)
  if(!str || typeof str != 'string' || str.length < 2 ) return str;

  const backwards = []; // convert into an array
  const totalItems = str.length - 1; // grab the length of the array(string) = how many items we have in the string

  for(let i = totalItems; i >= 0; i--) { // loop through the string from back(end of length of string) to front
  // keep going through loop as long as i >= 0

  backwards.push(str[i]); // after going backward one by one, we push each item that we create back into the array
}
  console.log(backwards); // each individual item from array backwards
  return backwards.join(''); // join items in the array
}
reverse(str);
```

```javascript
function reverse2(str){
//check for valid input
return str.split('').reverse().join('');
}
reverse2(str);
```

```javascript
const reverse3 = str => str.split('').reverse().join('');
reverse3(str);
```

```javascript
const reverse4 = str => [...str].reverse().join(''); // using spread operator javascript . We no longer need .split in this example
reverse4(str);
```

#### Add error handling at beginning

##### Check input in case you're given something other than a string(undefined, null, etc, number, ...)

```javascript
if(!str || typeof str != 'string' || str.length < 2 )
return str;
```

## Best Solution

```javascript
/*** Example I figured out using reverse array in place Alg. */
function reverse2(str) {
//let t0 = performance.now();
  str = str.toLowerCase().split('');

  for (let i = 0; i < str.length / 2; i++) {
    let currentLetter = str[i];

    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = currentLetter;
    }
   // let t1 = performance.now();
 // console.log(`Call to reverse took ${t1 - t0} milliseconds`);
  return str.join('');
}
reverse2('Hello World'); // => 'dlrow olleh' // Call to reverse took 0 milliseconds
```