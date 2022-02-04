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
| shift()       | adds element to end of array and removes the first element                                                                                               |
| splice()      | adds element between two elements (select starting index, select element to be removed, element to be inserted)                                          |
| slice()       | returns a brand new array (a good way to copy an array) (select starting index, select ending index)                                                     |
| concat()      | creates a new array by combining a new array with an exisitng array. Array1.concat([combines first array element])                                       |
| indexOf()     | returns the index of the first matching element in an array                                                                                              |
| lastindexOf() | finds the index of the first matching from the right side of an array                                                                                    |
| find()        | finds the first instance of an object in an array, returns the same object (not a copy)                                                                  |
| findIndex()   | returns the index of the first matching element in an Object                                                                                             |
| includes()    | like indexOf, works for primative values. If you do not need to know which index it's in, just need to know it exists, includes is better than indexOf() |
| sort()        | converts an array and converts it to a string. Sort is lexical.                                                                                          |
| reverse()     | reverses the order of an array                                                                                                                           |
| split()       | converts a string into a array str.split("")                                                                                                             |
| join()        | merge array elements into a single string str.split("").reverse().join(" ")                                                                              |
