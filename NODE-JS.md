
**⭕Q1 -->  What is node js ?**

(a)
 * Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side.
 * Node.js is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
 * Node.js is often used for building scalable and high-performance server-side applications, such as web servers, APIs, and real-time applications.

( It was created by Ryan Dahl in 2009 and has since become a popular choice for building web applications and APIs.)

❎ not a language
❎ not a framework
✅ a runtime environment

![alt text](</asset/WhatsApp Image 2025-05-05 at 15.07.58_4cf886ac.jpg>)

**⭕Q2 --> How is Node a runtime environment on the server side? What is V8?**

(a)
* Browser Execute Javascript on the Client-side , Node.js Execute Javascript on the Server-side.
* V8 is a Javascript engine for the Javascript language 

- V8:
The most widely used engine for Node.js. It's also the engine behind Google Chrome.

- JavaScriptCore:
Used by Apple's Safari and can be utilized in environments like Bun, a JavaScript runtime similar to Node.js.

- SpiderMonkey:
Mozilla's JavaScript engine, used in Firefox and potentially in server-side environments like CouchDB.

- Chakra:
Microsoft's JavaScript engine, with a C API that allows embedding in other applications, including potential use as an alternative engine in Node.js.

**⭕Q3 --> What is the difference between a Runtime Environment and a Framework?**

(a)
* Runtime Environment: Primarily focuses on providing the necessary infrastructure for code execution, including services like memory management and I/O operations.

* Framework: Primarily focuses on simplifying the development process by offering a structured set of tools, libraries, and best practices.

**⭕Q4 --> What is the difference between Node.js and Express.js?**

(a)
* Node.js is a runtime environment that allows the execution of JavaScript code server-side.

* Express.js is a framework built on the top Node.js.
    * It is designed to simplify the process of building web applications and APIs by providing a set of features like simple routing system, middleware support etc.


**⭕Q5 --> What are the differences between Client-Side (Browser) and Server-Side (Node.js)?**

(a)

![alt text](/asset/image1.png)

![alt text](/asset/image.png)


**⭕Q6 --> What is Single Threaded Programming?**

(a)
* A single-threaded programming language executes code sequentially in a single thread, meaning it processes one instruction at a time .This means that if one task is taking longer, the entire program must wait, and multiple tasks cannot be processed simultaneously. 

![alt text](/asset/image2.png)


**⭕Q7 --> What is Synchronous Programming?**

(a)
* In a synchronous program, each task is performed one after the other, and the program waits for each operation to complete before moving on to the next one.
* Synchronous programming focuses on the order of execution in a sequential manner, while single-threaded programming focuses on the single thread.


**⭕Q8 --> What is Multi Threaded Programming?**

(a)
* Multithreaded programming involves dividing a program's execution into multiple independent threads, allowing them to run concurrently, potentially improving performance and responsiveness. Each thread can execute its instructions independently while sharing the same memory space and resources of the parent process. 

![alt text](/asset/image3.png)


**⭕Q9 --> What is Asynchronous Programming?**

(a)
* In Node.js, asynchronous flow can be achieved by its single-threaded, non-blocking, and event-driven architecture.

* In Node.js, if there are 4 tasks(Task1, Task2, Task3, Task4) to be completed for an event. Then below steps will be executed:
1. First, Thread T1 will be created.
2. Thread T1 initiates Task1, but it won't wait for Task1 to complete. Instead, T1 proceeds to initiate Task2, then Task3 and Task4(This asynchronous execution allows T1 to efficiently handle multiple tasks concurrently).
3. Whenever Task1 completes, an event is emitted.
4. Thread T1, being event-driven, promptly responds to this event, interrupting its current task and delivering the result of Task1.


**⭕Q10 --> What is the difference between Synchronous & Asynchronous programming?**

(a)
![alt text](/asset/image4.png)


**⭕Q11 --> What are Events, Event Emitter, Event Queue, Event Loop & Event Driven?**

(a)
   * Event: Signals that something has happened in a program.
   * Event Emitter: Create or emit events.
   * Event Queue: Events emitted queued (stored) in event queue.
   * Event Handler(Event Listener): Function that responds to specific events
   * Event Loop: The event loop picks up event from the event queue and executes them in the order they were added.
   * Event Driven Architecture: It means operations in Node are drive or based by events.

   ![alt text](/asset/image5.png)


**⭕Q12 --> What are the main features & advantages of Node.js?**

(a)
   ![alt text](/asset/image6.png)


**⭕Q13 --> What are the main features & advantages of Node.js?**

(a)
* When to Use Node.js : 
  * ✓ Ideal for real-time applications like chat applications, online gaming, and collaborative tools due to its event-driven architecture.
  * ✓ Excellent for building lightweight and scalable RESTful APIs that handle a large number of concurrent connections.
  * ✓ Well-suited for building microservices-based architectures, enabling modular and scalable systems.

* When Not to Use Node.js : 
  * ✗ CPU-Intensive Tasks: Avoid for applications that involve heavy CPU processing (Image/Video Processing, Data Encryption/Decryption) as Node.js may not provide optimal performance in such scenarios because it is single-threaded and for heavy computation multi-threaded is better.



**⭕Q14 --> What is NPM? What is the role of node_modules folder?**

(a)
* NPM(Node Package Manager) is used to manage the dependencies for your Node project.

* node_modules folder contains all the dependencies of the node project.

**⭕Q15 --> What is the role of package.json file in Node?**

(a)
* package.json is a file that contains metadata about the Node project, including its dependencies and other configuration information. 
**(eg)**:- project name, version, author, license, dependencies, scripts, etc.

**⭕Q16 --> What are Modules in Node?**

(a)
* In Node.js, a module is a reusable block of code whose existence does not accidentally impact other code. Modules help organize your application into smaller, maintainable, and testable pieces.


**⭕Q17 --> What are the Types of modules in Node?**

(a)
 1 . Built-in Modules (provided by Node.js) : example: http, fs, path, etc.

 2 . Local Modules (created by the developer) : example: myModule.js

 3 . Third-party Modules (installed via npm) : example: express, mongoose, etc.


**⭕Q18 --> What are the Top 6 built in modules commonly used in node projects? Explain the role of each module?**

(a)

1. **http**: The http module is used to create HTTP servers and clients. It allows you to set up a basic web server that can listen for incoming HTTP requests and respond to them accordingly.

const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


2. **fs**: The fs module enables interaction with the file system. It provides both synchronous and asynchronous methods to read, write, update, delete, and manage files and directories.

const fs = require('fs');

// utf8 is formate of file
fs.writeFile('file.txt', 'Hello, Node.js!',utf8, (err) => {
  if (err) throw err;
  console.log('File has been saved!');
}); // Write to a file asynchronously.

fs.writeFileSync('file.txt', 'Hello, Node.js!'); // Write to a file synchronously.

const data = fs.readFileSync('file.txt', 'utf8'); // Read a file synchronously.

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // Read a file asynchronously.
});

3. **path**: The path module provides utilities for working with file and directory paths. It helps with constructing, resolving, and normalizing paths in a platform-independent way.

const path = require('path');
const filePath = path.join('/home/user', 'Documents', 'file.txt');
console.log(filePath); // Output: /home/user/Documents/file.txt

const filePath = path.resolve('/home/user', 'Documents', 'file.txt');
console.log(filePath); // Output: /home/user/Documents/file.txt

const filePath = path.parse('/home/user/Documents/file.txt');
console.log(filePath); // Output: { root: '/', dir: '/home/user/Documents', base: 'file.txt', ext: '.txt', name: 'file' }


4. **url**: The url module allows parsing, formatting, and resolving URLs. It is especially useful when dealing with query strings or handling request URLs on the server.

const url = require('url');

const myURL = new URL('https://example.com/path/to/page?query=string');
console.log(myURL.href); // Output: https://example.com/path/to/page?query=string

const query = url.parse(myURL.search, true).query;
console.log(query); // Output: { query: 'string' }

5. **OS**: The os module provides operating system-related utility methods and properties. You can retrieve system-level information such as CPU details, memory status, platform, and network interfaces.

const os = require('os');

const type = os.type();
console.log(type); // Output: Windows_NT (or Linux, macOS, etc.)

const release = os.release();
console.log(release); // Output: 10.0.19044 (or the corresponding release version)


6. **events**: The events module provides an implementation of the EventEmitter class, which allows you to define custom events and listeners. This is a key part of Node.js's event-driven architecture.

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
  console.log('Event occurred!');
});


**⭕Q19 --> What is the difference between a function and an event?**

(a) 
* A function is a reusable piece of code that performs a specific task when invoked or called.
* Events represent actions that can be observed and responded to. Events will call functions internally.


**⭕Q20 --> What is the role createServer() method of http module?**

(a)

* The createServer() method of the http module in Node.js is used to create an HTTP server.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});


**⭕Q20 --> What are the Advantage of using Express with Node js?**

(a)

✅ 1. Simplified Web Development
Express simplifies the process of building web applications by providing a clean structure and built-in features like routing, middleware support, and template engines.

✅ 2. Middleware Support
Express makes it easy to integrate and manage middleware functions, which handle request processing, validation, logging, authentication, and more — enhancing the application's request-response cycle.

✅ 3. Flexible Routing System
Express provides a powerful and flexible routing system to define routes for handling different HTTP methods (GET, POST, PUT, DELETE, etc.). It also supports dynamic route parameters and URL patterns.

✅ 4. Template Engine Integration
Express supports various template engines (like EJS, Pug, Handlebars), enabling dynamic generation of HTML on the server side — making it easier to serve dynamic content to users.



**⭕Q21 --> What is Middleware in Express.js and when to use them?**

(a)
* A middleware in Express.js is a function that handles HTTP requests, performs operations, and passes control to the next middleware.
* Middleware can be used for various purposes such as authentication, logging, error handling, and more.

![alt text](/asset/image7.png)


**⭕Q22 --> What is the purpose of the app.use() function in Express.js?**

(a)
* the app.use() method is used to execute(mount) middleware function globally.

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


**⭕Q23 --> What is the purpose of the next parameter in Express.js?**

(a)
* next parameter is callback function which is used to pass control to the next middleware function in the stack.

const express = require('express');

const app = express();

const middleware1 = (req,res,nex) =>{
    console.log('muhammed')
    next();
}
const middleware2 = (req,res,next) =>{
    console.log('navas');
    next();
}
app.use(middleware1);
app.use(middleware2);

app.listen(3000,()=>{
    console.log('server is running 3000')
})


**⭕Q24 --> What are the type of middleware's in Express.js?**

(a) 
* There are five types of middleware's in Express.js

 1. Application-level middleware
 2. Router-level middleware
 3. Error-handling middleware
 4. Built-in middleware
 5. Third-party middleware

**⭕Q25 -->  What is the difference btw application-level & route-level middleware?**


  ✅ Application-level middleware applies globally to all incoming request in the entire express application.

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

 ✅route-level middleware applies only to specific route , not for all imcoming request.

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


**⭕Q26 -->  What is error handling middleware and how to implement it?**

(a)
* Error handling middleware in Express is a special kind of middleware used to manage errors happening while handling incoming requests.
* To implement error handling in Express, define middleware with four parameters (err, req, res, next). Here the additional error object parameter will be used for error handling.

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


**⭕Q27 -->  What is built in middleware? How to serve static files from Express.js?**

(a)
* Built in middleware's are built in functions inside Express framework which provides common functionalities.
* express.static() middleware is used for serving static files.

const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


**⭕Q28 --> What are third-party middleware's? Give some examples?**

(a)

* therd-party middleware Express.js modules are developed therd-party developers.(not part of the core express)

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


**⭕Q29 --> Can you summarize all the type of middleware's?**

(a)
![alt text](/asset/image8.png)


**⭕Q30 --> What are the advantages of using middleware in Express.js?**

(a)
![alt text](/asset/image9.png)


**⭕Q31 --> What is Routing in Express.js?**

(a)
* Routing is the process of directing incoming HTTP requests to the appropriate handler function based on the request method (eg. GET, POST, PUT, DELETE) and the URL path.


![alt text](/asset/image10.png)


**⭕Q32 --> What is the difference between middleware & routing in Express?**

(a)
 ▶ middleware :- 
    *  Middleware are functions.
    * Middleware functions can access and the request and response objects, then they can
    * perform some actions (logic like authorization) 
    * End the request-response cycle 
    * Call the next middleware function in the stack.

 ▶ routing :- 
    * Routing is a process.
    * Routing is the process of directing incoming HTTP requests to the appropriate handler functions (Get, Put, Post/Delete).
    

**⭕Q33 --> What are Template Engines in Express.js?**

(a)
* Template engines are libraries that enable developers to generate dynamic HTML content by combining static HTML templates with data.

![alt text](/asset/image11.png)


**⭕Q34 --> Name some Template Engines libraries?**

(a)
![alt text](/asset/image12.png)


**⭕Q35 --> What are HTTP Request and Response structures in UI and REST API?**

![alt text](/asset/image13.png)


**⭕Q36 -->  main types of web APIs used in modern software development**

(a)

✅ 1. REST API (Representational State Transfer)
Style: Architectural style (not a protocol)
Format: Typically uses JSON or XML
Protocol: HTTP
Common verbs: GET, POST, PUT, DELETE
Usage: Widely used for web services due to its simplicity and performance

✅ 2. SOAP API (Simple Object Access Protocol)
Style: Strict protocol (based on XML)
Format: XML only
Protocol: Typically uses HTTP or SMTP
Features: Strong typing, built-in error handling, more secure
Usage: Enterprise-level systems (e.g., banking, finance)

✅ 3. GraphQL API
Style: Query language for APIs (by Facebook)
Format: JSON
Protocol: HTTP
Features: Client can request exactly the data it needs
Usage: Optimized front-end communication with flexible data

✅ 4. gRPC (Google Remote Procedure Call)
Style: Binary protocol based on HTTP/2
Format: Protocol Buffers (protobuf)
Features: Very fast, efficient for microservices and internal APIs
Usage: High-performance backend services (e.g., Google Cloud)

✅ 5. WebSockets API
Style: Full-duplex communication channel over a single TCP connection
Format: Any (JSON, text, binary)
Features: Real-time data exchange (bidirectional)
Usage: Chat apps, live updates, gaming


**⭕Q37 -->  What are GET, POST, PUT & DELETE HTTP methods?**

![alt text](/asset/image14.png)


**⭕Q38 -->  What is the difference between PUT & PATCH methods?**

![alt text](/asset/image15.png)


**⭕Q39 -->  What are the role of status codes in RESTful APIs?**

(a) 

* Status codes are used to indicate the outcome of a request.

![alt text](/asset/image16.png)



**⭕Q40 --> What is CORS in RESTful APIs?**

(a)

* CORS(Cross-Origin Resource Sharing) is a security feature implemented in web browsers that restricts web pages or scripts from making requests to a different domain than the one that served the web page.

![alt text](/asset/image17.png)

✅ 1 . is correct 

✅ 2 . the ( http://xyz.com/getdate ) is diffrent website ( different domain districted )

✅ 3 . the ( http://api.inteviewhappy.com/getdate ) is ( different subdomain distrected )

✅ 4 . the ( httpS://inteviewhappy.com/getdate ) is ( different protocol distrected )

✅ 5 . the ( http://inteviewhappy.com/getdate:3000 ) is ( different port distrected )



**⭕Q41 --> What are Serialization & Deserialization?**

(a)

* Serialization is the process of converting an object into a format that can be easily stored or transmitted, such as JSON or XML.

* Deserialization is the process of converting a serialized object back into its original form.

![alt text](/asset/image18.png)



**⭕Q42 --> What are the types of serialization?**


![alt text](/asset/image19.png)



**⭕Q43 --> How to Serialize & Deserialize in Node.js?**

(a)

* Serialize a javascript Object to JSON format using JSON.stringify() method.

const obj = { name: 'John', age: 30 };
const json = JSON.stringify(obj);
console.log(json); // {"name":"John","age":30}

* Deserialize a JSON string to a javascript Object using JSON.parse() method.

const json = '{"name":"John","age":30}';
const obj = JSON.parse(json);
console.log(obj); // { name: 'John', age: 30 }


**⭕Q44 --> What is an API document? What are the popular documentation formats?**


(a) 
* An Api document , describe the functionality , Features and usage of REST Api 

![alt text](/asset/image20.png.png)

* popular Api document tools

![alt text](/asset/image21.png)


**⭕Q45 --> What is the typical structure of a REST API project in Node?**

(a)
* node_modules: Directory where npm packages are installed.

* src: Source code directory, containing:
      * Database: Store and retrieve data.
      * Config: Store configuration settings.
      * controllers: Files responsible for handling business logic.
      * models: Defines data models.
      * routes: Defines API routes.
      * Middlewares: Handle authentication, authorization, and other common tasks.
      * utils: Contains reusable functions used across the project.
      * app.js: Initializes and configures the Express application. Connects routes, middleware, and other configurations.

* .gitignore: A file that specifies files and directories to be ignored by version control (e.g., node_modules, *.log).

* package.json: The file that contains metadata about the project and its dependencies.


![alt text](/asset/image22.png)



**⭕Q46 --> What are Authentication and Authorization?**

(a)

* Authentication is the process of verifying the identity of a user by validating their credentials such as username and password.

* Authorization is the process of allowing an authenticated user access to resources.
* Authentication is always precedes to Authorization.

![alt text](/asset/image23.png) ![alt text](/asset/image24.png)


**⭕Q47 --> What are the types of authentication in Node.js?**


![alt text](/asset/image25.png)


**⭕Q48 --> What is Basic Authentication?**

(a)
* In Basic Authentication, the user passes their credentials on a post request. At the Node Rest API end, credentials are verified, and response is sent back.

* The disadvantage of it is, Basic Authentication sends credentials in plain text over the network, so it is not considered a secure method of
authentication.


**⭕Q49 --> What are the security risks associated with storing passwords in plain text in Node.js?**

(a) 
*  Unauthorized Access: Storing passwords in plain text means that anyone with access to the storage location, such as a database or configuration file, can easily read and extract passwords.

* Compromise of Other Accounts: Many users tend to reuse passwords across multiple accounts, allowing attackers to access to multiple accounts.


**⭕Q50 --> What is the role of Hashing and Salt in securing passwords?**

(a)
* Hashing: Hashing is a process of converting a password into a fixed- size string of characters using a mathematical algorithm.


![alt text](/asset/image26.png) ![alt text](/asset/image27.png)


**⭕Q51 --> What is Token based and JWT authentication?**


(a)
* Token-based authentication is a method where a client proves its identity by using a token instead of sending username/password for every request. 

🧠 How It Works:

✅ Client logs in (with username & password).

✅ Server validates the credentials.

✅ Server generates a token (a string or encrypted object).

✅ The token is sent to the client.

✅ On future requests, the client sends the token in headers (usually Authorization: Bearer <token>).

✅ The server validates the token and allows or denies the request.



**⭕Q52 --> What is Error Handling? In how many ways you can do error handling in Node.js?**

(a)
* Error handling is the process of identifying and responding to errors that occur during the execution of a program.

![alt text](/asset/image28.png)



**⭕Q53 --> How to handle errors in synchronous operations using try-catch-finally?**

(a) 
✅ 1. TRY - A try block is a block of code inside which any error can occur.

✅ 2. CATCH - When any error occur in TRY block then it is passed to catch block to handle it.

✅ 3. FINALLY - The finally block is used to execute a given set of statements, whether an exception occur or not.

try{
  const a = 9 
  if(a<8){
    console.log('try')

  }else{
    throw new Error('this is error')
  }
}catch(err){
    console.log('error ')
}finally{
    console.log('final ')
}
// output : - this is error ,// final 


**⭕Q54 --> How to handle errors using Promises?**

(a)
* catch method is used promises for error handle
* .catch() method will be called if the Promise is rejected.

![alt text](/asset/image29.png)


**⭕Q55 --> How to handle errors while using async-await?**

(a)

* try-catch block is used with async-await for handle errors 

![alt text](/asset/image30.png)



**⭕Q56 --> What are streams in Node.js and how do they work?**

(a)

* Streams are a way to handle large amounts of data in a memory-efficient way.

* Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way. They can be readable, writable, or both (duplex) and allow processing data piece by piece without loading the entire data into memory.

![alt text](/asset/31.png)


**⭕Q57 --> How do you identify and fix memory leaks in a Node.js application?**

(a) 

* Unmanaged closures
* Global variables
* Event listeners not being removed
* Circular references

🤎To identify and fix them:

* Use tools like heapdump or Chrome DevTools
* Monitor memory usage with process.memoryUsage()
* Properly manage event listeners
* Implement proper garbage collection practices

✅ **clinic.js** — full performance analysis.

✅ **memwatch-next** — leak detection.

✅ **heapdump** — take heap snapshots for offline analysis.



**⭕Q58 --> How would you implement logging and monitoring in a Node.js application?**

(a) 

🧊 Using a structured logging library (Winston, Bunyan)
🧊 Log rotation and management
🧊 Centralized logging systems
🧊 Application performance monitoring (APM)
🧊 Health checks



**⭕Q59 --> What are the key security considerations in a Node.js/Express application?**

(a) 

🥮 Input validation
🥮 Using security middleware (Helmet, CORS)
🥮 Implementing proper authentication and authorization
🥮 Preventing common web vulnerabilities (XSS, CSRF, SQL Injection)
🥮 Keeping dependencies up to date
🥮 Setting proper HTTP headers



**⭕Q60 --> Explain Buffer and Stream in Node.js with examples**

(a)

🥦 Buffers are temporary storage for binary data

🥦 Streams allow processing data in chunks without loading entire content into memory

🥦 Pipes connect streams together for efficient data flow


![alt text](/asset/2.png)  ![alt text](/asset/3.png)


**⭕Q61 --> What is libuv? What is its role in Node.js?**

(a) 

* libuv is a multi-platform C library that provides support for asynchronous I/O based operations. Node.js uses libuv to handle many of its core functionalities, abstracting away the differences in underlying operating system mechanisms (like epoll on Linux, kqueue on macOS, IOCP on Windows).

♻ Key Roles of libuv:

👉 Event Loop Implementation: libuv provides the event loop that Node.js uses.

👉 Asynchronous I/O: Handles file system operations, networking (TCP/UDP sockets), DNS lookups, etc., asynchronously.

👉 Threading: While Node.js is single-threaded for your JavaScript code, libuv maintains a thread pool for operations that are blocking at the OS level or are CPU-intensive and can be parallelized (e.g., some crypto functions, zlib, DNS lookups via getaddrinfo). This prevents the main Node.js thread from blocking.

👉 Timers: Manages timers (setTimeout, setInterval).

👉 Child Processes: Handles spawning and managing child processes.

👉 Cross-platform Abstraction: Provides a consistent API across different operating systems.

👉 Conceptual Relation:
   * Your JavaScript Code  ->  Node.js Bindings (C++)  ->  libuv  ->  Operating System Kernel


**⭕Q62 --> Explain Clustering in Node.js**

(a)
* Clustering in Node.js allows you to leverage multi-core systems by running multiple instances of your Node.js app, each on a separate CPU core. This helps you scale your application beyond the limitations of a single thread (since Node.js is single-threaded by default).

🧠 Why Use Clustering?

* Node.js runs on a single thread, so it can only use one CPU core.

* On multi-core machines, clustering allows you to handle more requests concurrently.

* Improves performance and fault tolerance.

![alt text](/asset/4.png)

📈 Benefits of Clustering : - 

🚀 Utilizes all CPU cores.

🔁 Increases throughput.

🛡️ Fault isolation (if one worker crashes, others keep running).


**⭕Q63 --> Explain params and query in node.js**

(a) 

📌 1. Route Params (req.params)
----------------------------------------
👍 Used for: Getting data from URL path segments.

👍 Defined in routes using :paramName

👍 Commonly used for resource identifiers like user ID, product ID, etc.

![alt text](/asset/5.png)


📌 2. Query Strings (req.query)
---------------------------------------
👍 Used for: Getting optional key-value pairs from the URL after the ?

👍 Common for filters, pagination, sorting, search, etc.

![alt text](/asset/6.png)

🔍 Difference

![alt text](/asset/image31.png)


**⭕Q63 --> what is promise and explain it**

(a) 

* A Promise in Node.js represents the eventual completion or failure of an asynchronous operation. It allows you to write cleaner, non-blocking code than traditional callbacks.

✅ Why Use Promises?

* Avoid callback hell (deeply nested callbacks)

* Make async code easier to read, write, and debug

* Supports chaining and error handling

![alt text](/asset/7.png)