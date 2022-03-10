## About

A note taking app for coders who like making notes on everything. Writing too many readme files inspired me to make this app.

## Planning

Mockup on Figma:
![mockup](https://github.com/WebDevBernard/UnNamedProjectWIP/blob/main/docs/mockup.png?raw=true)

What I plan to make:

- A markdown editor (Codemirror) that can toggle between markdown and a formatted view (ReactMarkdown) with syntax highlighting (React-SyntaxHighlighter)
- A UI panel that is mobile responsive. Each UI panel will also scroll-y independently.
- A drag and drop (React Beautiful DND), which lets the user drag notes into a trash bin and also recover it.
- Each note will also have a dialog (use right mouse click) that will have a delete option, and a download option.
- Saving will be local storage, there will also be a delay after input before it gets saved automatically.
- Styling with Tailwind CSS, state management with Redux, frontend written in React.

Stretch:

- Implement either MongoDB or DynamoDB.
- Auth0 login for different users.
- Favourite a note, filtering using React search library or simple filter function.

Each Note should have these keys:

```
{
  userId: string
  userName: string
  noteBookId: string
  noteBookTitle: string
  noteId: string
  noteTitle: string
  noteContent: string
  isTrash: boolean
}

```

### User Stories

- As a user I should be able to download my markdown so that I can have my own copy.
- As a user I should be able to select different notebooks so that all my notes are organized.
- As a user I should be able to drop my tasks into a deleted folder so that I can recover it in case I change my mind.

## Tech Stack

[React-Syntax-Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)<br/>
[Codemirror](https://github.com/uiwjs/react-codemirror)<br/>
[React-Markdown](https://github.com/uiwjs/react-markdown-preview)
