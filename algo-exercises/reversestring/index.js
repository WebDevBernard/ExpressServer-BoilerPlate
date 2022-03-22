// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//  My Solution
// function reverse(str) {
//   let arr = "";
//   for (let i = str.length; i >= 0; i--) {
//     if (str[i] !== undefined) {
//       arr += str[i];
//     }
//   }
//   return arr;
// }

// Solution 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Solution 2
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution 3
//  reduce((previousValue, currentValue)=>{}, initialValue)
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

console.log(reverse("apple"));
