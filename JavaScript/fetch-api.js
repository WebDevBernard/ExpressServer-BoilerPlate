import { useState, useEffect } from "react";
const url = "https://catfact.ninja/fact";
const [state, setState] = useState("");
// simple fetch "GET" with no error checking
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

// GET request with fetch() and useEffect
useEffect(() => {
  fetch(url).then(
    (response) =>
      setState(response.json()).then((error) => console.error("Error:", error)) // do something with the response here
  );
}, []);

// POST request with fetch() with async/await and useEffect
useEffect(() => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: "Some Data" }), // body data must match "Content Type" header
    });
    const data = await response.json(); // parse JSON response
    setState(data);
  } catch {
    (error) => console.error("Error:", error);
  }
}, []);
