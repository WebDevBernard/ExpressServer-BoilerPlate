## Javascript

### Primatives

| Name      | Example            |
| --------- | ------------------ |
| Boolean   | false              |
| Null      | null               |
| Undefined | undefined          |
| Number    | 5                  |
| String    | 'This is a string' |
| BigInt    | 9007199254740991   |
| Symbol    | Symbol(symbol)     |

### Falsey Values

| Values    |
| --------- |
| False     |
| 0         |
| ""        |
| null      |
| undefined |
| NaN       |

### Array Methods

| Name          | Description                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| push()        | adds element to end of array                                                                                                                             |
| pop()         | removes last element of array                                                                                                                            |
| unshift()     | adds element to start of array                                                                                                                           |
| shift()       | adds element between two elements (select starting index, select element to be removed, element to be inserted)                                          |
| splice()      | adds element between two elements (select starting index, select element to be removed, element to be inserted)                                          |
| slice()       | returns a brand new array (a good way to copy an array) (select starting index, select ending index)                                                     |
| concat()      | creates a new array by combining a new array with an exisitng array. Array1.concat([combines first array element])                                       |
| indexOf()     | finds the index of the first matching instance of an element (does not work for reference types ie. objects and only works for primatives)               |
| lastindexOf() | finds the index of the first matching from the right side of an array                                                                                    |
| find()        | finds the index of the first matching from the right side of an array                                                                                    |
| findIndex()   | finds index of an object in an array                                                                                                                     |
| includes()    | like indexOf, works for primative values. If you do not need to know which index it's in, just need to know it exists, includes is better than indexOf() |
| sort()        | converts an array and converts it to a string. Sort is lexical.                                                                                          |
| reverse()     | reverses the order of an array                                                                                                                           |
| split()       | converts a string into a array Array1.split(;)                                                                                                           |
| join()        | merge array elements into a single string Array1.join(" ")                                                                                               |

### Scope and Hoisting

- Hoisting pulls your variable up

| Keyword | Scope          | Hoisting | Can be Reassigned | Can be Redeclared |
| ------- | -------------- | -------- | ----------------- | ----------------- |
| var     | function scope | Yes      | Yes               | Yes               |
| let     | block scope    | No       | Yes               | No                |
| const   | block scope    | No       | No                | No                |

### Capturing and Bubbling

```
<section>
  <div>
    <button></button>
  </div>
</section>;
```

- Events have 2 phases (DOM Events). When the button is clicked, the browser checks for event listeners
  - Capturing : event listener on the button (propagates up from button>div>section)
  - Bubbling : event listener on the section (propagates down from section>div>button)

### Closure

```
	let userName = "Max";
	function greetUser() {
	  // let name = userName;
	  console.log("Hi " + name);
	}
	let name = "Maximilian";
	userName = "Manuel";
greetUser();
```

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

- Every function in javascript is a closure. A function will close over/refer to a external variable (in a different lexical environment), remember it's surrounding variables even if those variables haven't been used outside of the function.

### Defer and Async

```
<script src="assets/scripts/vendor" defer />
<script src="assets/scripts/vendor" async />
```

- defer executes scripts first in the order they are placed
- async executes async first but order of async scripts may not be in the same order

### Recursion

- Without recursion, you would need to do multiple nested for loops to go through the nested data structure

```
const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];
  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}
console.log(getFriendNames(myself));
```

### JavaScript Shortcuts

| Name                                     | Example |
| ---------------------------------------- | ------- |
| Boolean Coercion                         | !!      |
| Default Value Assignment                 | \|\|    |
| Use last value if first condition truthy | &&      |
