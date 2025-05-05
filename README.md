
**⭕Q1 -->  What is node js ?**

(a)
 * Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side.
 * Node.js is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
 * Node.js is often used for building scalable and high-performance server-side applications, such as web servers, APIs, and real-time applications.

( It was created by Ryan Dahl in 2009 and has since become a popular choice for building web applications and APIs.)

❎ not a language
❎ not a framework
✅ a runtime environment

![alt text](</assest/WhatsApp Image 2025-05-05 at 15.07.58_4cf886ac.jpg>)

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

![alt text](/assest/image1.png)

![alt text](/assest/image.png)


**⭕Q6 --> What is Single Threaded Programming?**

(a)
* A single-threaded programming language executes code sequentially in a single thread, meaning it processes one instruction at a time .This means that if one task is taking longer, the entire program must wait, and multiple tasks cannot be processed simultaneously. 

![alt text](/assest/image2.png)


**⭕Q7 --> What is Synchronous Programming?**

(a)
* In a synchronous program, each task is performed one after the other, and the program waits for each operation to complete before moving on to the next one.
* Synchronous programming focuses on the order of execution in a sequential manner, while single-threaded programming focuses on the single thread.


**⭕Q8 --> What is Multi Threaded Programming?**

(a)
* Multithreaded programming involves dividing a program's execution into multiple independent threads, allowing them to run concurrently, potentially improving performance and responsiveness. Each thread can execute its instructions independently while sharing the same memory space and resources of the parent process. 

![alt text](/assest/image3.png)


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
![alt text](/assest/image4.png)


**⭕Q11 --> What are Events, Event Emitter, Event Queue, Event Loop & Event Driven?**

(a)
   * Event: Signals that something has happened in a program.
   * Event Emitter: Create or emit events.
   * Event Queue: Events emitted queued (stored) in event queue.
   * Event Handler(Event Listener): Function that responds to specific events
   * Event Loop: The event loop picks up event from the event queue and executes them in the order they were added.
   * Event Driven Architecture: It means operations in Node are drive or based by events.

   ![alt text](/assest/image5.png)


**⭕Q12 --> What are the main features & advantages of Node.js?**

(a)
   ![alt text](/assest/image6.png)


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


**⭕Q18 --> What is the difference between a function and an event?**

(a) 
* A function is a reusable piece of code that performs a specific task when invoked or called.
* Events represent actions that can be observed and responded to. Events will call functions internally.


**⭕Q18 --> What is the role createServer() method of http module?**

(a)

* The createServer() method of the http module in Node.js is used to create an HTTP server.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

