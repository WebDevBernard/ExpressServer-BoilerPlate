// Defining Primatives
const name: string;
// Union type, age can be number or string
const age: number | string;
const isStudent: boolean;
// array of strings
const hobbies: string[];
// array of numbers
const dates: number[];
// tuples - not used much
const role: [number, string];

// Defining Objects
// Question Mark means variable is optional
type Person = {
  name: string;
  age?: number;
};
