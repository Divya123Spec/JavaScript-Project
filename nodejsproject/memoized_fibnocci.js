function memoizedFibonacci() {
    const cache = {}; // Create a cache object
  
    // Inner function to calculate Fibonacci
    const fibonacci = (n) => {
      if (n < 0) return undefined; // Handle negative input
      if (n === 0) return 0; // Base case
      if (n === 1) return 1; // Base case
  
      // Check if the value is already in the cache
      if (n in cache) {
        return cache[n];
      }
  
      // Calculate Fibonacci recursively and store in cache
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    };
  
    return fibonacci; // Return the inner function
  }
  
  // Usage
  const fib = memoizedFibonacci();
  
  console.log(fib(10)); // Output: 55
  console.log(fib(50)); // Output: 12586269025
  console.log(fib(100)); // Output: 354224848179261915075
  