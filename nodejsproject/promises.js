// What are promises?
// Promises are a way to handle asynchronous operations in JavaScript.
// A promises is an object repersenting the eventual completion or failure of an asynchronous operation.
// A promise is in one of these states:
// 1. Pending: initial state, neither fulfilled nor rejected.
// 2. Fulfilled: meaning that the operation completed successfully.
// 3. Rejected: meaning that the operation failed.
// example
const promise = new Promise((resolve, reject) => {
  const res = true;
  if (res) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 2000);
  });
};

dos();

// async and await
// async and await are the new way to handle async operations in JavaScript.
// async makes a function return a Promise
// await makes a function wait for a Promise

// example
const doss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 2000);
  });
};

const callDos = async () => {
  // async function
  console.log("Calling dos");
  const result = await doss(); // wait until the promise resolves
  console.log(result); // Success
};
// Async function always returnd a promise and await makes the function wait for a promise
// example promise and async and wait
const doSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 2000);
  });
};

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
async function asyncCall() {
  //here async is used to make the function return a promise
  console.log("calling");
  const result = await resolveAfter2Seconds(); // here await is used to wait for the promise to resolve
  console.log(result);
}
asyncCall(); // first calling this function

function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 2000);
  });
}
async function asyncCallWithError() {
  try {
    console.log("calling"); // calling first
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.error("Caught error:", error); // Error occurred is printed here after 2 seconds beacuse in promise we have set timeout of 2 seconds and reject the promise
  }
}
asyncCallWithError();

function resolveAfter1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1 second");
    }, 1000);
  });
}
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds");
    }, 2000);
  });
}
async function multipleAsyncCalls() {
  console.log("Start");

  const result1 = await resolveAfter1Second();
  console.log(result1);

  const result2 = await resolveAfter2Seconds();
  console.log(result2);

  console.log("End");
}

multipleAsyncCalls();

// Promise.all
// Promise.all is used to run multiple promises at the same time and wait for all of them to complete.
//Promise.all() is a method that takes an iterable of promises as an input and returns a single Promise that resolves when all of the input promises have resolved.
//  or rejects if any of the input promises reject.
// example
function resolveAfter1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1 second");
    }, 1000);
  });
}
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds");
    }, 2000);
  });
}
Promise.all([resolveAfter1Second(), resolveAfter2Seconds()])
  .then((values) => {
    console.log(values); // ['1 second', '2 seconds']
  })
  .catch((error) => {
    console.error(error);
  });

// Handling Rejection
function resolveAfter1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1 second");
    }, 1000);
  });
}
function rejectAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 2000);
  });
}
Promise.all([resolveAfter1Second(), rejectAfter2Seconds()])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error); // 'Error occurred' heere error occured after 2 seconds which is rejected in promise , if one promise is rejected then all promises are rejected
  });

//   Describe the purpose of the 'setTimeout' and 'setInterval' functions.
// setTimeout is a function that is used to execute a function after a specified amount of time.
// It takes two arguments: a function to execute and a time delay in milliseconds.
// example
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
// setInterval is a function that is used to execute a function repeatedly at a specified interval.
// It takes two arguments: a function to execute and a time delay in milliseconds.
// example
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`Hello ${count}`);
  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);
