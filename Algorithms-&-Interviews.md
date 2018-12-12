# What is an algorithm?

* a process or set of steps to accomplish a certain task

## How do you improve ?
1. Devise a plan for solving problems
2. Master common problem solving patterns

### George Polya "How to Solve It"


## Write a function which takes two numbers and returns their sum.

    const sum = (num1, num2) => num1 + num2;
    sum(2,3);

### Understanding the Problem
1. Can I restate the problem in my own words?
  "implement addition"
2. What are the inputs that go into the problem?
  "What is the upper thresh hold, floating decimal?, returning string ?"
3. What are the outputs that should come from the solution of the ?
  "should it be an integer, float ?"
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's ok; it's still worth considering the question at this early stage.)
  ### Ask interviewer if info is not provided
5. How should i label the important pieces of data that are a part of the problem?

### Explore Concrete Examples
### Break It Down
### Solve/Simplify
### Look Back and Refactor





## Explore Examples
* coming up with examples can help you understand the problem better
* examples also provide sanity checks that your eventual solution works how it should
* User Stories!!
* Unit Tests!!


## Start with Simple Examples
* Progress to more Complex Examples
* Explore Examples with Empty inputs
* Explore Examples with invalid inputs

### Write a function which takes in a string and returns counts of each character in the string



### Simple ex.
    charCount('aaaa');  {a:4} should you return letters that aren't in there ? (clarifying questions)
    // {b:0, c:0, ...} ?
### More complex ex.
    "my phone number is 1883838"
     Do we want to account for spaces ? numbers ?
    "Hello hi" should we store an uppercase H and a lowercase h separately?

    charCount('hello');  {h:1, e:1, l:1, l:1, o:1}

 ### Empty values
   * Do we want to return to we want to return an empty object at the end.
   * Do we want to return No Or false or undefined or maybe an error.

### Invalid inputs
* What if somebody passes in something that isn't a string or they pass in a number where they pass in an object or they pass in null.

## Break it Down
* Explicitly writing out the steps that you need to take.
* This forces you to think about your code before you actually write it so that you're not just Freewheelin' and trying to come up with it on the fly.

      function charCount(str) {  "Your PIN number is 1234"
        // do something
        // return an object with keys that are alpha numeric characters in a string;
        // values should be the counts for those characters

        // make object to return at
        const result = {};
        // loop over string, for each character
        for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND a key in object, add one to count
        if (result[char] > 0 ) {
          result[char]++;
        // if char is a number/letter AND not in object, add it and set value to 1
        } else {
          result[char] = 1;
        }
      };  // could use regex for alphanumeric char
        // if char is something else (space, period, etc.) don't do anything return object at end

      return result;
      }

      charCount("Hello");

## Solve/Simplify
* Solve a simpler problem
  Trying to ignore the part that is giving you a really hard time in order to focus on everything else.
* Simplify
  1. Find the core difficulty in what you are trying to do
  2. Temporarily ignore that difficulty
  3. Write a simplified solution
  4. Then incorporate that difficulty back i












