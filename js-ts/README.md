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

- Tuples

[https://fettblog.eu/typescript-react-typeing-custom-hooks/](https://fettblog.eu/typescript-react-typeing-custom-hooks/)

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
