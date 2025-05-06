// // Creating a buffer
// const buf = Buffer.from("Hello World", "utf8");

// console.log(buf); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
// console.log(buf.toString("hex")); // 48656c6c6f20576f726c64
// console.log(buf.toString("utf8")); // Hello World




// const fs = require("fs");
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: "Alice" });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

// Using the Promise
fetchUser(1)
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
