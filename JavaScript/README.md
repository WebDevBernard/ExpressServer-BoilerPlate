## TypeScript

`npx create-react-app <appname> --template typescript`

### Types

- Type: labels to describe different properties + functions a value has

| Type            | Description                                            | Example                         |
| --------------- | ------------------------------------------------------ | ------------------------------- |
| Primative Types | number, boolean, void, undefined, string, symbol, null |                                 |
| Object Types    | function, array, classes, objects                      | `interface Todo { id: number }` |

- Type Annotations + Type Inference

| Type            | Description                                                    | Example                   |
| --------------- | -------------------------------------------------------------- | ------------------------- |
| Type Annotation | Code we add to tell TS what type of value a variable refers to | `let apples: number = 5;` |
| Type Inference  | TS tries to figure out what type of value a variable refers to | `let apples = 5;`         |

### React with TypeScript

- React Parent Component

```
import { Child, ChildAsFC } from "./Child";
const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Click")}></ChildAsFC>
  );
};

export default Parent;
```

- React Child Component

```
interface ChildProps {
  color: string;
  onClick: () => void;
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

```

- React State

```
const UserSearch: React.FC = () => {
  // Using Type Inference
  const [name, setName] = useState("");
  // Using Type Annotation
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
    </div>
  );
};
```

### Interfaces

| Description                                                                    | Example                                                                                |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Creates a new type, describing the property names and value types of an object | `interface Vehicle { name: string; year: number; broken: boolean; summary(): string;}` |

## JavaScript

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

| Name          | Description                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| push()        | adds element to end of array                                                                                                                                     |
| pop()         | removes last element of array                                                                                                                                    |
| unshift()     | adds element to start of array                                                                                                                                   |
| shift()       | adds element to end of array and removes the first element                                                                                                       |
| splice()      | adds element between two elements (select starting index, select element to be removed, element to be inserted)                                                  |
| slice()       | returns a brand new array (select starting index, select ending but not include end) (0 , 3) not include 3. (1) not include 0 index but include everthing after. |
| concat()      | creates a new array by combining a new array with an exisitng array. Array1.concat([combines first array element])                                               |
| indexOf()     | returns the index of the first matching element in an array                                                                                                      |
| lastindexOf() | finds the index of the first matching from the right side of an array                                                                                            |
| find()        | finds the first instance of an object in an array, returns the same object (not a copy)                                                                          |
| findIndex()   | returns the index of the first matching element in an Object                                                                                                     |
| includes()    | like indexOf, works for primative values. If you do not need to know which index it's in, just need to know it exists, includes is better than indexOf()         |
| sort()        | converts an array and converts it to a string. Sort is lexical.                                                                                                  |
| reverse()     | reverses the order of an array                                                                                                                                   |
| split()       | converts a string into a array str.split("")                                                                                                                     |
| join()        | merge array elements into a single string str.split("").reverse().join(" ")                                                                                      |
