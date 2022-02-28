## TypeScript

`npx create-react-app <appname> --template typescript`

### Types

| Type            | Description                                            | Example                                                                                            |
| --------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Primative Types | number, boolean, void, undefined, string, symbol, null | `const name: string;` <br/> `const isStudent: boolean;`                                            |
| Union Types     | Union type, age can be number or string                | <code>const age: number &#124; string<\code>                                                       |
| Array Types     | array of numbers or array of strings                   | `const hobbies: string[];` <br/> `const dates: number[];`                                          |
| Tuples          | data type containing two different data types          | `const role: [number, string];`                                                                    |
| Object Types    | type Person & todo vs. interface Todo extends Person   | `type Person = { name: string }` <br/> `interface Todo { id?: number }` <br/> ? means optional key |
| Function types  | a function that takes a string and return undefined    | `let printName: (name: string) => void`                                                            |

### Type Annotations + Type Inference

| Type            | Description                                                    | Example                   |
| --------------- | -------------------------------------------------------------- | ------------------------- |
| Type Annotation | Code we add to tell TS what type of value a variable refers to | `let apples: number = 5;` |
| Type Inference  | TS tries to figure out what type of value a variable refers to | `let apples = 5;`         |

### React with TypeScript

- [Writing a custom hook](https://fettblog.eu/typescript-react-typeing-custom-hooks/)

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
