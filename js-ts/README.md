## TypeScript

`npx create-react-app <appname> --template typescript`

### Types

```
const name: string;
const age: number | string
const isStudent: boolean
const hobbies: string[]

type Person = { name: string }
interface Todo { id?: number }

let printName: (name: string) => void
```

### Type Annotations + Type Inference

| Type            | Description                                                    | Example                   |
| --------------- | -------------------------------------------------------------- | ------------------------- |
| Type Annotation | Code we add to tell TS what type of value a variable refers to | `let apples: number = 5;` |
| Type Inference  | TS tries to figure out what type of value a variable refers to | `let apples = 5;`         |
