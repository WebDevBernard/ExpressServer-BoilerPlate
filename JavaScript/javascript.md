## Javascript

| Primatives | Example            |
| ---------- | ------------------ |
| Boolean    | false              |
| Null       | null               |
| Undefined  | undefined          |
| Number     | 5                  |
| String     | 'This is a string' |
| BigInt     | 9007199254740991   |
| Symbol     | Symbol(symbol)     |

| Array Method  | Description                                                                                                                                              |
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
|               |
| includes()    | like indexOf, works for primative values. If you do not need to know which index it's in, just need to know it exists, includes is better than indexOf() |
| sort()        | converts an array and converts it to a string. Sort is lexical.                                                                                          |
| reverse()     | reverses the order of an array                                                                                                                           |
| split()       | converts a string into a array Array1.split(;)                                                                                                           |
| join()        | merge array elements into a single string Array1.join(" ")                                                                                               |

### Shortcuts

| Name                                   | Description | Example                                                                                                                                                         |
| -------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ----------------------------------------------------------------------- |
| Boolean Coercion                       | !!          | const userInput = "" const validInput = !!userInput, coerce a value to true                                                                                     |
| Default Value Assignment               |             |                                                                                                                                                                 |     | const name = something \|\| "Max" or will return the first truthy value |
| Use value if condition is true via AND | &&          | const name = isLoggedIn && ["Books"] If the first value is true, it will return the last value. If the first operand is falsy, it will return the first operand |
