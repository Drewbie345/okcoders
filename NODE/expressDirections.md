Express Project Instructions
============================

I will walk you through the steps to getting an express app up and running. Follow along on your computer. I am using the 'Hello World' example from the Express website.

1. Create a new folder (try using the command line!). I'm calling mine "express-sample-project". 
```bash
mkdir express-sample-project
```

2. Create a file in the folder called "package.json".
```bash
touch package.json
```

3. Open this file in Sublime Text. Add the following code:
```js
{
  "name": "express-sample-project",
  "main": "server.js",
  "dependencies": {
    "express": "~4.0.0"
  }
}
```

4. In your terminal (command line), run the following command.
```bash
npm install
```

5. Create a new file in the folder called "server.js".
```bash
touch server.js
```

6. Open this file in Sublime Text. Add the following code:
```js
var express = require('express');
var app = express();
```