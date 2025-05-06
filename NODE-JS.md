# Node.js Interview Questions Study Guide

## Table of Contents

- [Section 1: Node.js Basics](#section-1-nodejs-basics)
- [Section 2: Node.js Architecture](#section-2-nodejs-architecture)
- [Section 3: Node.js Modules](#section-3-nodejs-modules)
- [Section 4: Express.js Basics](#section-4-expressjs-basics)
- [Section 5: Express Middleware](#section-5-express-middleware)
- [Section 6: RESTful APIs](#section-6-restful-apis)
- [Section 7: Authentication & Security](#section-7-authentication--security)
- [Section 8: Error Handling](#section-8-error-handling)
- [Section 9: Advanced Concepts](#section-9-advanced-concepts)

---

## Section 1: Node.js Basics

<details>
<summary><b>⭕ Q1: What is Node.js?</b></summary>

* Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side.
* Node.js is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
* Node.js is often used for building scalable and high-performance server-side applications, such as web servers, APIs, and real-time applications.

(It was created by Ryan Dahl in 2009 and has since become a popular choice for building web applications and APIs.)

❎ **not** a language  
❎ **not** a framework  
✅ a runtime environment

![Node.js Structure](</assest/WhatsApp%20Image%202025-05-05%20at%2015.07.58_4cf886ac.jpg>)
</details>

<details>
<summary><b>⭕ Q2: How is Node a runtime environment on the server side? What is V8?</b></summary>

* Browser Execute Javascript on the Client-side, Node.js Execute Javascript on the Server-side.
* V8 is a Javascript engine for the Javascript language 

JavaScript Engines:
- **V8**:
The most widely used engine for Node.js. It's also the engine behind Google Chrome.

- **JavaScriptCore**:
Used by Apple's Safari and can be utilized in environments like Bun, a JavaScript runtime similar to Node.js.

- **SpiderMonkey**:
Mozilla's JavaScript engine, used in Firefox and potentially in server-side environments like CouchDB.

- **Chakra**:
Microsoft's JavaScript engine, with a C API that allows embedding in other applications, including potential use as an alternative engine in Node.js.
</details>

<details>
<summary><b>⭕ Q3: What is the difference between a Runtime Environment and a Framework?</b></summary>

* **Runtime Environment**: Primarily focuses on providing the necessary infrastructure for code execution, including services like memory management and I/O operations.

* **Framework**: Primarily focuses on simplifying the development process by offering a structured set of tools, libraries, and best practices.
</details>

<details>
<summary><b>⭕ Q4: What is the difference between Node.js and Express.js?</b></summary>

* **Node.js** is a runtime environment that allows the execution of JavaScript code server-side.

* **Express.js** is a framework built on top of Node.js.
    * It is designed to simplify the process of building web applications and APIs by providing a set of features like simple routing system, middleware support etc.
</details>

<details>
<summary><b>⭕ Q5: What are the differences between Client-Side (Browser) and Server-Side (Node.js)?</b></summary>

![Client vs Server Side 1](/assest/image1.png)

![Client vs Server Side 2](/assest/image.png)
</details>

## Section 2: Node.js Architecture

<details>
<summary><b>⭕ Q6: What is Single Threaded Programming?</b></summary>

* A single-threaded programming language executes code sequentially in a single thread, meaning it processes one instruction at a time. This means that if one task is taking longer, the entire program must wait, and multiple tasks cannot be processed simultaneously. 

![Single Thread](/assest/image2.png)
</details>

<details>
<summary><b>⭕ Q7: What is Synchronous Programming?</b></summary>

* In a synchronous program, each task is performed one after the other, and the program waits for each operation to complete before moving on to the next one.
* Synchronous programming focuses on the order of execution in a sequential manner, while single-threaded programming focuses on the single thread.
</details>

<details>
<summary><b>⭕ Q8: What is Multi Threaded Programming?</b></summary>

* Multithreaded programming involves dividing a program's execution into multiple independent threads, allowing them to run concurrently, potentially improving performance and responsiveness. Each thread can execute its instructions independently while sharing the same memory space and resources of the parent process. 

![Multi Thread](/assest/image3.png)
</details>

<details>
<summary><b>⭕ Q9: What is Asynchronous Programming?</b></summary>

* In Node.js, asynchronous flow can be achieved by its single-threaded, non-blocking, and event-driven architecture.

* In Node.js, if there are 4 tasks(Task1, Task2, Task3, Task4) to be completed for an event. Then below steps will be executed:
1. First, Thread T1 will be created.
2. Thread T1 initiates Task1, but it won't wait for Task1 to complete. Instead, T1 proceeds to initiate Task2, then Task3 and Task4(This asynchronous execution allows T1 to efficiently handle multiple tasks concurrently).
3. Whenever Task1 completes, an event is emitted.
4. Thread T1, being event-driven, promptly responds to this event, interrupting its current task and delivering the result of Task1.
</details>

<details>
<summary><b>⭕ Q10: What is the difference between Synchronous & Asynchronous programming?</b></summary>

![Sync vs Async](/assest/image4.png)
</details>

<details>
<summary><b>⭕ Q11: What are Events, Event Emitter, Event Queue, Event Loop & Event Driven?</b></summary>

* **Event**: Signals that something has happened in a program.
* **Event Emitter**: Create or emit events.
* **Event Queue**: Events emitted queued (stored) in event queue.
* **Event Handler(Event Listener)**: Function that responds to specific events
* **Event Loop**: The event loop picks up event from the event queue and executes them in the order they were added.
* **Event Driven Architecture**: It means operations in Node are drive or based by events.

![Event Architecture](/assest/image5.png)
</details>

<details>
<summary><b>⭕ Q12 & Q13: What are the main features & advantages of Node.js?</b></summary>

![Features and Advantages](/assest/image6.png)

* **When to Use Node.js**: 
  * ✓ Ideal for real-time applications like chat applications, online gaming, and collaborative tools due to its event-driven architecture.
  * ✓ Excellent for building lightweight and scalable RESTful APIs that handle a large number of concurrent connections.
  * ✓ Well-suited for building microservices-based architectures, enabling modular and scalable systems.

* **When Not to Use Node.js**: 
  * ✗ CPU-Intensive Tasks: Avoid for applications that involve heavy CPU processing (Image/Video Processing, Data Encryption/Decryption) as Node.js may not provide optimal performance in such scenarios because it is single-threaded and for heavy computation multi-threaded is better.
</details>

## Section 3: Node.js Modules

<details>
<summary><b>⭕ Q14: What is NPM? What is the role of node_modules folder?</b></summary>

* **NPM (Node Package Manager)** is used to manage the dependencies for your Node project.

* **node_modules** folder contains all the dependencies of the node project.
</details>

<details>
<summary><b>⭕ Q15: What is the role of package.json file in Node?</b></summary>

* **package.json** is a file that contains metadata about the Node project, including its dependencies and other configuration information. 
**(eg)**: project name, version, author, license, dependencies, scripts, etc.
</details>

<details>
<summary><b>⭕ Q16: What are Modules in Node?</b></summary>

* In Node.js, a module is a reusable block of code whose existence does not accidentally impact other code. Modules help organize your application into smaller, maintainable, and testable pieces.
</details>

<details>
<summary><b>⭕ Q17: What are the Types of modules in Node?</b></summary>

1. **Built-in Modules** (provided by Node.js): example: http, fs, path, etc.

2. **Local Modules** (created by the developer): example: myModule.js

3. **Third-party Modules** (installed via npm): example: express, mongoose, etc.
</details>

<details>
<summary><b>⭕ Q18: What are the Top 6 built in modules commonly used in node projects? Explain the role of each module?</b></summary>

1. **http**: The http module is used to create HTTP servers and clients. It allows you to set up a basic web server that can listen for incoming HTTP requests and respond to them accordingly.

```javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

2. **fs**: The fs module enables interaction with the file system. It provides both synchronous and asynchronous methods to read, write, update, delete, and manage files and directories.

```javascript
const fs = require('fs');

// utf8 is format of file
fs.writeFile('file.txt', 'Hello, Node.js!', 'utf8', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
}); // Write to a file asynchronously.

fs.writeFileSync('file.txt', 'Hello, Node.js!'); // Write to a file synchronously.

const data = fs.readFileSync('file.txt', 'utf8'); // Read a file synchronously.

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // Read a file asynchronously.
});
```

3. **path**: The path module provides utilities for working with file and directory paths. It helps with constructing, resolving, and normalizing paths in a platform-independent way.

```javascript
const path = require('path');
const filePath = path.join('/home/user', 'Documents', 'file.txt');
console.log(filePath); // Output: /home/user/Documents/file.txt

const filePath2 = path.resolve('/home/user', 'Documents', 'file.txt');
console.log(filePath2); // Output: /home/user/Documents/file.txt

const fileInfo = path.parse('/home/user/Documents/file.txt');
console.log(fileInfo); // Output: { root: '/', dir: '/home/user/Documents', base: 'file.txt', ext: '.txt', name: 'file' }
```

4. **url**: The url module allows parsing, formatting, and resolving URLs. It is especially useful when dealing with query strings or handling request URLs on the server.

```javascript
const url = require('url');

const myURL = new URL('https://example.com/path/to/page?query=string');
console.log(myURL.href); // Output: https://example.com/path/to/page?query=string

const query = url.parse(myURL.search, true).query;
console.log(query); // Output: { query: 'string' }
```

5. **os**: The os module provides operating system-related utility methods and properties. You can retrieve system-level information such as CPU details, memory status, platform, and network interfaces.

```javascript
const os = require('os');

const type = os.type();
console.log(type); // Output: Windows_NT (or Linux, macOS, etc.)

const release = os.release();
console.log(release); // Output: 10.0.19044 (or the corresponding release version)
```

6. **events**: The events module provides an implementation of the EventEmitter class, which allows you to define custom events and listeners. This is a key part of Node.js's event-driven architecture.

```javascript
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('Event occurred!');
});

myEmitter.emit('event'); // Triggers the event
```
</details>

<details>
<summary><b>⭕ Q19: What is the difference between a function and an event?</b></summary>

* A **function** is a reusable piece of code that performs a specific task when invoked or called.
* **Events** represent actions that can be observed and responded to. Events will call functions internally.
</details>

## Section 4: Express.js Basics

<details>
<summary><b>⭕ Q20: What is the role createServer() method of http module?</b></summary>

* The createServer() method of the http module in Node.js is used to create an HTTP server.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
</details>

<details>
<summary><b>⭕ Q20: What are the Advantage of using Express with Node js?</b></summary>

✅ 1. **Simplified Web Development**
Express simplifies the process of building web applications by providing a clean structure and built-in features like routing, middleware support, and template engines.

✅ 2. **Middleware Support**
Express makes it easy to integrate and manage middleware functions, which handle request processing, validation, logging, authentication, and more — enhancing the application's request-response cycle.

✅ 3. **Flexible Routing System**
Express provides a powerful and flexible routing system to define routes for handling different HTTP methods (GET, POST, PUT, DELETE, etc.). It also supports dynamic route parameters and URL patterns.

✅ 4. **Template Engine Integration**
Express supports various template engines (like EJS, Pug, Handlebars), enabling dynamic generation of HTML on the server side — making it easier to serve dynamic content to users.
</details>

<details>
<summary><b>⭕ Q21: What is Middleware in Express.js and when to use them?</b></summary>

* A middleware in Express.js is a function that handles HTTP requests, performs operations, and passes control to the next middleware.
* Middleware can be used for various purposes such as authentication, logging, error handling, and more.

![Middleware Flow](/assest/image7.png)
</details>

<details>
<summary><b>⭕ Q22: What is the purpose of the app.use() function in Express.js?</b></summary>

* The app.use() method is used to execute(mount) middleware function globally.

```javascript
 const express = require('express');
 const app = express();

const middleware = (req, res, next) => {
   console.log('Middleware executed');
   next();
 };

 app.use(middleware);

 app.listen(3000, () => {
   console.log('Server is running on port 3000');
 });
```
</details>

<details>
<summary><b>⭕ Q23: What is the purpose of the next parameter in Express.js?</b></summary>

* next parameter is callback function which is used to pass control to the next middleware function in the stack.

```javascript
const express = require('express');

const app = express();

const middleware1 = (req, res, next) => {
    console.log('muhammed')
    next();
}
const middleware2 = (req, res, next) => {
    console.log('navas');
    next();
}
app.use(middleware1);
app.use(middleware2);

app.listen(3000, () => {
    console.log('server is running 3000')
})
```
</details>

## Section 5: Express Middleware

<details>
<summary><b>⭕ Q24: What are the type of middleware's in Express.js?</b></summary>

* There are five types of middleware's in Express.js

 1. Application-level middleware
 2. Router-level middleware
 3. Error-handling middleware
 4. Built-in middleware
 5. Third-party middleware
</details>

<details>
<summary><b>⭕ Q25: What is the difference btw application-level & route-level middleware?</b></summary>

✅ **Application-level middleware** applies globally to all incoming requests in the entire express application.

```javascript
const express = require('express');
const app = express();

const middleware = (req, res, next) => {
  console.log('Middleware executed');
  next();
};

app.use(middleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

✅ **Route-level middleware** applies only to specific route, not for all incoming requests.

```javascript
const express = require('express');
const app = express();

const middleware = (req, res, next) => {
  console.log('Middleware executed');
  next();
};

app.get('/route', middleware, (req, res) => {
  res.send('Route handler');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
</details>

<details>
<summary><b>⭕ Q26: What is error handling middleware and how to implement it?</b></summary>

* Error handling middleware in Express is a special kind of middleware used to manage errors happening while handling incoming requests.
* To implement error handling in Express, define middleware with four parameters (err, req, res, next). Here the additional error object parameter will be used for error handling.

```javascript
const express = require('express');
const app = express();

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
</details>

<details>
<summary><b>⭕ Q27: What is built in middleware? How to serve static files from Express.js?</b></summary>

* Built-in middleware's are built-in functions inside Express framework which provides common functionalities.
* express.static() middleware is used for serving static files.

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
</details>

<details>
<summary><b>⭕ Q28: What are third-party middleware's? Give some examples?</b></summary>

* Third-party middleware Express.js modules are developed by third-party developers (not part of the core express).

```javascript
const express = require('express');
const helmet = require('helmet');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');

const app = express();

// use the helmet middleware for setting HTTP security headers
app.use(helmet());

// use the body-parser middleware for parsing request bodies
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// use the morgan middleware for logging HTTP requests
app.use(morgan('combined'));

// use the compression middleware for compressing responses
app.use(compression());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
</details>

<details>
<summary><b>⭕ Q29: Can you summarize all the type of middleware's?</b></summary>

![Middleware Types](/assest/image8.png)
</details>

<details>
<summary><b>⭕ Q30: What are the advantages of using middleware in Express.js?</b></summary>

![Middleware Advantages](/assest/image9.png)
</details>

<details>
<summary><b>⭕ Q31: What is Routing in Express.js?</b></summary>

* Routing is the process of directing incoming HTTP requests to the appropriate handler function based on the request method (eg. GET, POST, PUT, DELETE) and the URL path.

![Routing](/assest/image10.png)
</details>

<details>
<summary><b>⭕ Q32: What is the difference between middleware & routing in Express?</b></summary>

▶ **middleware**: 
   * Middleware are functions.
   * Middleware functions can access and the request and response objects, then they can:
   * Perform some actions (logic like authorization) 
   * End the request-response cycle 
   * Call the next middleware function in the stack.

▶ **routing**: 
   * Routing is a process.
   * Routing is the process of directing incoming HTTP requests to the appropriate handler functions (Get, Put, Post/Delete).
</details>

<details>
<summary><b>⭕ Q33: What are Template Engines in Express.js?</b></summary>

* Template engines are libraries that enable developers to generate dynamic HTML content by combining static HTML templates with data.

![Template Engines](/assest/image11.png)
</details>

<details>
<summary><b>⭕ Q34: Name some Template Engines libraries?</b></summary>

![Template Engine Libraries](/assest/image12.png)
</details>

<details>
<summary><b>⭕ Q35: What are HTTP Request and Response structures in UI and REST API?</b></summary>

![HTTP Request and Response](/assest/image13.png)
</details>

## Section 6: RESTful APIs

<details>
<summary><b>⭕ Q36: Main types of web APIs used in modern software development</b></summary>

✅ 1. **REST API (Representational State Transfer)**
* Style: Architectural style (not a protocol)
* Format: Typically uses JSON or XML
* Protocol: HTTP
* Common verbs: GET, POST, PUT, DELETE
* Usage: Widely used for web services due to its simplicity and performance

✅ 2. **SOAP API (Simple Object Access Protocol)**
* Style: Strict protocol (based on XML)
* Format: XML only
* Protocol: Typically uses HTTP or SMTP
* Features: Strong typing, built-in error handling, more secure
* Usage: Enterprise-level systems (e.g., banking, finance)

✅ 3. **GraphQL API**
* Style: Query language for APIs (by Facebook)
* Format: JSON
* Protocol: HTTP
* Features: Client can request exactly the data it needs
* Usage: Optimized front-end communication with flexible data

✅ 4. **gRPC (Google Remote Procedure Call)**
* Style: Binary protocol based on HTTP/2
* Format: Protocol Buffers (protobuf)
* Features: Very fast, efficient for microservices and internal APIs
* Usage: High-performance backend services (e.g., Google Cloud)

✅ 5. **WebSockets API**
* Style: Full-duplex communication channel over a single TCP connection
* Format: Any (JSON, text, binary)
* Features: Real-time data exchange (bidirectional)
* Usage: Chat apps, live updates, gaming
</details>

<details>
<summary><b>⭕ Q37: What are GET, POST, PUT & DELETE HTTP methods?</b></summary>

![HTTP Methods](/assest/image14.png)
</details>

<details>
<summary><b>⭕ Q38: What is the difference between PUT & PATCH methods?</b></summary>

![PUT vs PATCH](/assest/image15.png)
</details>

<details>
<summary><b>⭕ Q39: What are the role of status codes in RESTful APIs?</b></summary>

* Status codes are used to indicate the outcome of a request.

![Status Codes](/assest/image16.png)
</details>

<details>
<summary><b>⭕ Q40: What is CORS in RESTful APIs?</b></summary>

* CORS (Cross-Origin Resource Sharing) is a security feature implemented in web browsers that restricts web pages or scripts from making requests to a different domain than the one that served the web page.

![CORS](/assest/image17.png)

✅ 1. is correct 

✅ 2. the ( http://xyz.com/getdate ) is different website ( different domain restricted )

✅ 3. the ( http://api.inteviewhappy.com/getdate ) is ( different subdomain restricted )

✅ 4. the ( httpS://inteviewhappy.com/getdate ) is ( different protocol restricted )

✅ 5. the ( http://inteviewhappy.com/getdate:3000 ) is ( different port restricted )
</details>

<details>
<summary><b>⭕ Q41: What are Serialization & Deserialization?</b></summary>

* **Serialization** is the process of converting an object into a format that can be easily stored or transmitted, such as JSON or XML.

* **Deserialization** is the process of converting a serialized object back into its original form.

![Serialization & Deserialization](/assest/image18.png)
</details>

<details>
<summary><b>⭕ Q42: What are the types of serialization?</b></summary>

![Serialization Types](/assest/image19.png)
</details>

<details>
<summary><b>⭕ Q43: How to Serialize & Deserialize in Node.js?</b></summary>

* Serialize a JavaScript Object to JSON format using JSON.stringify() method.

```javascript
const obj = { name: 'John', age: 30 };
const json = JSON.stringify(obj);
console.log(json); // {"name":"John","age":30}
```

* Deserialize a JSON string to a JavaScript Object using JSON.parse() method.

```javascript
const json = '{"name":"John","age":30}';
const obj = JSON.parse(json);
console.log(obj); // { name: 'John', age: 30 }
```
</details>

<details>
<summary><b>⭕ Q44: What is an API document? What are the popular documentation formats?</b></summary>

* An API document describes the functionality, features and usage of REST API 

![API Documentation](/assest/image20.png.png)

* Popular API documentation tools

![API Documentation Tools](/assest/image21.png)
</details>

<details>
<summary><b>⭕ Q45: What is the typical structure of a REST API project in Node?</b></summary>

* **node_modules**: Directory where npm packages are installed.

* **src**: Source code directory, containing:
      * **Database**: Store and retrieve data.
      * **Config**: Store configuration settings.
      * **Controllers**: Files responsible for handling business logic.
      * **Models**: Defines data models.
      * **Routes**: Defines API routes.
      * **Middlewares**: Handle authentication, authorization, and other common tasks.
      * **Utils**: Contains reusable functions used across the project.
      * **app.js**: Initializes and configures the Express application. Connects routes, middleware, and other configurations.

* **.gitignore**: A file that specifies files and directories to be ignored by version control (e.g., node_modules, *.log).

* **package.json**: The file that contains metadata about the project and its dependencies.

![REST API Structure](/assest/image22.png)
</details>

## Section 7: Authentication & Security

<details>
<summary><b>⭕ Q46: What are Authentication and Authorization?</b></summary>

* **Authentication** is the process of verifying the identity of a user by validating their credentials such as username and password.

* **Authorization** is the process of allowing an authenticated user access to resources.
* Authentication always precedes Authorization.

![Authentication vs Authorization 1](/assest/image23.png) ![Authentication vs Authorization 2](/assest/image24.png)
</details>

<details>
<summary><b>⭕ Q47: What are the types of authentication in Node.js?</b></summary>

![Authentication Types](/assest/image25.png)
</details>

<details>
<summary><b>⭕ Q48: What is Basic Authentication?</b></summary>

* In Basic Authentication, the user passes their credentials on a post request. At the Node Rest API end, credentials are verified, and response is sent back.

* The disadvantage of it is, Basic Authentication sends credentials in plain text over the network, so it is not considered a secure method of authentication.
</details>

<details>
<summary><b>⭕ Q49: What are the security risks associated with storing passwords in plain text in Node.js?</b></summary>

* **Unauthorized Access**: Storing passwords in plain text means that anyone with access to the storage location, such as a database or configuration file, can easily read and extract passwords.

* **Compromise of Other Accounts**: Many users tend to reuse passwords across multiple accounts, allowing attackers access to multiple accounts.
</details>

<details>
<summary><b>⭕ Q50: What is the role of Hashing and Salt in securing passwords?</b></summary>

* **Hashing**: Hashing is a process of converting a password into a fixed-size string of characters using a mathematical algorithm.

![Hashing](/assest/image26.png) ![Salting](/assest/image27.png)
</details>

<details>
<summary><b>⭕ Q51: What is Token based and JWT authentication?</b></summary>

* Token-based authentication is a method where a client proves its identity by using a token instead of sending username/password for every request. 

🧠 **How It Works**:

✅ Client logs in (with username & password).

✅ Server validates the credentials.

✅ Server generates a token (a string or encrypted object).

✅ The token is sent to the client.

✅ On future requests, the client sends the token in headers (usually Authorization: Bearer <token>).

✅ The server validates the token and allows or denies the request.
</details>

## Section 8: Error Handling

<details>
<summary><b>⭕ Q52: What is Error Handling? In how many ways you can do error handling in Node.js?</b></summary>

* Error handling is the process of identifying and responding to errors that occur during the execution of a program.

![Error Handling](/assest/image28.png)
</details>

<details>
<summary><b>⭕ Q53: How to handle errors in synchronous operations using try-catch-finally?</b></summary>

✅ 1. **TRY** - A try block is a block of code inside which any error can occur.

✅ 2. **CATCH** - When any error occurs in TRY block then it is passed to catch block to handle it.

✅ 3. **FINALLY** - The finally block is used to execute a given set of statements, whether an exception occur or not.

```javascript
try {
  const a = 9 
  if(a < 8) {
    console.log('try')
  } else {
    throw new Error('this is error')
  }
} catch(err) {
    console.log('error ')
} finally {
    console.log('final ')
}
// output: error, final 
```
</details>

<details>
<summary><b>⭕ Q54: How to handle errors using Promises?</b></summary>

* catch method is used with promises for error handling
*