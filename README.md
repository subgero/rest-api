# How to create an NodeJs Rest Api with ExpressJS

## Before to start we need to install NVM (Node Version Manager)

nvm allows you to quickly install and use different versions of node via the command line.

To install or update NVM run the next command

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Examples:

Install specific NodeJs version
```
nvm i 18
```

List the NodeJs versions installed

```
nvm ls
```

Use an specific NodeJs Version

```
nvm use 16
```

## Install NodeJs

Once we have nvm installed, we must install NodeJs, in this case I'm going to work with NodeJs 16

```
nvm i 16
```

## Start to build our Rest Api

```
mkdir gero-rest-api
cd gero-rest-api
npm init -y
```

## Create the index.js file

Create the index.js file and paste the content below on it

```
    // index.js
    const express = require('express');
    const app = express();
    const port = 3000;

    // Middleware to parse JSON request bodies
    app.use(express.json());

    // Define a simple GET endpoint
    app.get('/', (req, res) => {
        res.json({ message: 'Hello from the API!' });
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
```