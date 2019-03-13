'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {

  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('')
      words[i][0] = words[i][0].toUpperCase();
      words [i] = words [i].join ('') 
  }
  words = words.join(' ')
  return words;
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('hello world'), 'Hello World')
assert.strictEqual(jadenCase('je suis une wilder'), 'Je Suis Une Wilder')


// End of tests */
