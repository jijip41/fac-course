
# Modules

---

 1. What is the difference between our own, built-in, and 3rd party modules? 
 2. What is the package.json file for 

---

### 🚀 What are modules? 
- Modules are used to isolate code.
- By default all files are self-contained in Node. 
- Code in one file cannot access anything in another file. 

✨ To use something in another file we should "export" it.

---

### 🧐 How to use export / import it? 

```javascript=
// export.js
// exporting code
const message1 = "hello";
const message2 = "goodbye"
module.exports = module1; // 🤩 There are more ways to do this!
//
// index.js
// importing code
const get_message = require("./export.js");
console.log(get_message) // "hello"
```

---

### 👉 3 Types of modules<br><br>

#### 🍏 Our own(Local) Module<br><br>
#### 🍎 Built-in(Core) Modules<br><br>
#### 🍐 3rd party Modules

---

***🍏 Our own(Local) Modules:*** These are the modules that we create for our own use. 
- Created locally in our Node.js application.
- Can distribute it via NPM
- e.g. add() - from our workshop(node-npm-intro)
```javascript=
// add.js
function add(x, y) {
return x + y;
}
console.log(add(4, 6)); // Logs: 10
module.export = add()
```
``` javascript
// terminal
node add.js
```

---

***🍎 Built-in Modules:*** They are shipped with Node.js 
- e.g. https, os, fs(file system), net. - refer to https://www.w3schools.com/nodejs/ref_modules.asp
- Node provides some extra built-in modules that provide features JS doesn't have. 
- We can import these just like our own modules, only without the path(just using their name). 

```javascript=
const http = require('http');
const server = http.createServer((req, res) => {
// code here
});

server.listen(5000, () => {})
```

---

***🍐 3rd party Modules:*** We can install them from any package manager. 
- Third-party modules are modules that are available online using the Node Package Manager(NPM).
- These modules can be installed in the project folder or globally.
- We use these modules to accomplish or simplify any existing task.
- e.g. express(simplify our web API development), Mongoose, Angular, React 

---

``` javascript=
npm install express
```
``` javascript=
const express = require('express');
const server = express();
server.get('/', (req, res) => {
//code here
})
server.listen(3000);
```

---

***🤓 A bit more about modules***

✅ Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. 
✅ Modules can be a single file or a collection of multiple files/folders. 

---

✅ A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function. 


---

## What is the package.json file for?

---

* A package.json is the heart of any project that lives in the root directory of your project. ♥️
* Your package.json holds important information about the project. 
* It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application. 

---

#### What is the purpose of package.json?

---

* Your project's package.json is the central place to configure and describe how to interact with and run your application. 
* It is used by the `npm` and `yarn` to identify your project and understand how to handle the project's dependencies. 
* It's the package.json file that enables npm to start your project, run scripts, install dependencies, and many other useful tasks. 

---

#### Creating a package.json file 🤓
There are two ways of creating/generating a package.json file
1. **Npm or Yarn**
2. **Manually** 

---

1. **Npm or Yarn**
**npm** : run `npm init` on your terminal (you need to have Node installed on your system)
**yarn** : run `yarn init` on your terminal (you need to have Node and Yarn installed on your system)
After running the command, it should ask for some information about the project and generate a package.json file in the root of your project. The generated file should look like the example below.

---

``` javascript
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.16.4",
	"compression": "~1.7.4"
  },
  "devDependencies": {
	"eslint": "^5.16.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

2. **Manually** 
To create the file manually, create a package.json file manually in the root of the project, and add an empty object with the required properties, which are name and version.
``` javascript
{
  "name": "storemanager",
  "version": "1.0.0"
}
```

---

* `version` indicates the current version

```javascript
"version": "1.0.0"
```

---

* `name` sets the application/package name

```javascript
"name": "test-project"
```

---

* `description` is a brief description of the app/package

```javascript 
"description": "A package to work with strings"
```

---

* `main` set the entry point for the application

```javascript
"main": "src/main.js"
```

---

* `private` if set to true prevents the app/package to be accidentally published on npm

```javascript
"private": true
```

---

* `scripts` defines a set of node scripts you can run

```javascript
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

---

* `dependencies` sets a list of npm packages installed as dependencies

```javascript
"dependencies": {
  "vue": "^2.5.2"
}
```

---

* `devDependencies` sets a list of npm packages installed as development dependencies. 
They differ from dependencies because they are meant to be installed only on a development machine, not needed to run the code in production.

``` javascript
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```

---

* `engines` sets which versions of Node.js this package/app works on

```javascript
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}
```

---

## The End
