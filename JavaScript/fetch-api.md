## Fetch API

### Simple Fetch

```
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### React Get Request

```
useEffect(() => {
  fetch(url).then((response) =>
    setState((prev) => [...prev, response.json()]).then((error) =>
      console.error("Error:", error)
    )
  );
}, []);
```

### React Post Request

```
useEffect(() => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: "Some data you want to save" }),
    });
    const data = await response.json();
    setState((prev) => [...prev, data]);
  } catch {
    (error) => console.error("Error:", error);
  }
}, []);
```
