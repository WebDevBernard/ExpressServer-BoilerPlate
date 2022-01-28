- setup TypeScript

`npm install -g typescript ts-node`
`npm install @types/node --save-dev`

- execute TypeScript code

  `ts-node index.ts`

- Type: labels to describe different properties + functions a value has

| Type            | Description                                            | Example                       |
| --------------- | ------------------------------------------------------ | ----------------------------- |
| Primative Types | number, boolean, void, undefined, string, symbol, null |                               |
| Object Types    | function, array, classes, objects                      | interface Todo { id: number } |

- Type Annotations + Type Inference
  - Type Annotation: Code we add to tell TS what type of value a variable refers to
  - Type Inference: TS tries to figure out what type of value a variable refers to
