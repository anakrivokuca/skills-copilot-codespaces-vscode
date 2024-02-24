// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create an array of comments
const comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Mary', comment: 'How are you?' },
  { name: 'Joe', comment: 'I am fine.' },
  { name: 'Alice', comment: 'Good to see you.' }
];

// Create a route to get all the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// End of comments.js

// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create an array of comments
const comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Mary', comment: 'How are you?' },
  { name: 'Joe', comment: 'I am fine.' },
  { name: 'Alice', comment: 'Good to see you.' }
];

// Create a route to get all the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// End of index.js

// Path: package.json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}

// End of package.json

// Output
$ node index.js
Server is running at http://localhost:3000
```

In the above example, we have created a web server that listens to port 3000 and has a route `/comments`. When a request is made to the `/comments` route, it returns a JSON response with an array of comments.

## Q4. What is middleware in Express.js?

Ans: Middleware functions are functions that have