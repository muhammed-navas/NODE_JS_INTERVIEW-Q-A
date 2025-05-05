
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


**⭕Q11 --> What are the main features & advantages of Node.js?**

(a)
   ![alt text](/assest/image6.png)


**⭕Q11 --> What are the main features & advantages of Node.js?**

(a)
* When to Use Node.js : 
  [1]--> ✓ Ideal for real-time applications like chat applications, online gaming, and collaborative tools due to its event-driven architecture.
  [2]--> ✓ Excellent for building lightweight and scalable RESTful APIs that handle a large number of concurrent connections.
  [3]--> ✓ Well-suited for building microservices-based architectures, enabling modular and scalable systems.

* When Not to Use Node.js : 
  [1]--> ✗ CPU-Intensive Tasks: Avoid for applications that involve heavy CPU processing (Image/Video Processing, Data Encryption/Decryption) as Node.js may not provide optimal performance in such scenarios because it is single-threaded and for heavy computation multi-threaded is better.