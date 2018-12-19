# Anagrams

### *Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.*



    function validAnagram(first, second) { // takes two args
      if(first.length !== second.length) { // if lengths don't match then return false
    return false;
    }
    const lookup = {}; // create empty obj to that is break down of first string. If letter is found, it is added to object

    for (let i = 0; i < first.length; i++) { // loop through first string
      let letter = first[i];
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; // if letter exists, increment, otherwise set to 1
    }
    console.log(lookup); // { a: 3, n: 1, g: 1, r: 1, m: 1 }

    for (let i = 0; i < second.length; i++) { // loop over second string
      let letter = second[i]; // placeholder variable called letter that stores individual letter
      if (!lookup[letter]) { // can't find letter or letter is zero then it's not an anagram
        return false;
      } else {
        lookup[letter] -= 1; // otherwise we subtract 1 to set each . letter to 0
      }
    }
    console.log(lookup); // { a: 0, n: 0, g: 0, r: 0, m: 0 }

    return true;

    }
    validAnagram('anagram', 'nagaramm'); // true

    validAnagram('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', 'nagaram') // true
    validAnagram('rat', 'car') // false
    validAnagram('awesome', 'awesom') // false
    validAnagram('qwerty', 'qeywrt') // true
    validAnagram('texttwisttime', 'timetwisttext') //true