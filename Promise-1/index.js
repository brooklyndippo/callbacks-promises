// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`

// The console prints the rejected message and catches an error to print promise rejected.

// **2)** What happens when you call both `resolve` and `reject`? Test this.

// If you call both, the first one that is called, in this case rejected, takes priority.

// **3)** Does the order matter you call resolve and reject matter? Test this. 

// Yes. If you call resolve before reject, then it wil be resolved.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.

// It still just continues to print the very first call line, whether that is resolve or reject.