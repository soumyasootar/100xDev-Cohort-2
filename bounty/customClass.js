class CustomPromise {
    constructor(executor) {
      // Initialize Promise state, value, and callback arrays
      this.state = 'pending';
      this.value = undefined;
      this.onResolveCallbacks = [];
      this.onRejectCallbacks = [];
  
      // Define resolve and reject functions to change Promise state
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          // Trigger all resolve callbacks with the resolved value
          this.onResolveCallbacks.forEach(callback => callback(this.value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.value = reason;
          // Trigger all reject callbacks with the rejection reason
          this.onRejectCallbacks.forEach(callback => callback(this.value));
        }
      };
  
      try {
        // Execute the executor function with resolve and reject as arguments
        executor(resolve, reject);
      } catch (error) {
        // If an error occurs during execution, reject the Promise
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      return new CustomPromise((resolve, reject) => {
        // Define resolveHandler and rejectHandler to handle Promise resolution
        const resolveHandler = (value) => {
          try {
            // If onFulfilled is a function, call it with the resolved value
            if (typeof onFulfilled === 'function') {
              const result = onFulfilled(value);
              // If the result is a Promise, resolve or reject the new Promise accordingly
              if (result instanceof CustomPromise) {
                result.then(resolve, reject);
                return;
              }
              // If the result is not a Promise, resolve the new Promise with the result
              resolve(result);
            } else {
              // If onFulfilled is not a function, resolve the new Promise with the value
              resolve(value);
            }
          } catch (error) {
            // If an error occurs during handling, reject the new Promise with the error
            reject(error);
          }
        };
  
        const rejectHandler = (reason) => {
          try {
            // If onRejected is a function, call it with the rejection reason
            if (typeof onRejected === 'function') {
              const result = onRejected(reason);
              // If the result is a Promise, resolve or reject the new Promise accordingly
              if (result instanceof CustomPromise) {
                result.then(resolve, reject);
                return;
              }
              // If the result is not a Promise, resolve the new Promise with the result
              resolve(result);
            } else {
              // If onRejected is not a function, reject the new Promise with the reason
              reject(reason);
            }
          } catch (error) {
            // If an error occurs during handling, reject the new Promise with the error
            reject(error);
          }
        };
  
        // Check Promise state and execute handlers accordingly
        if (this.state === 'fulfilled') {
          setTimeout(() => {
            resolveHandler(this.value);
          }, 0);
        } else if (this.state === 'rejected') {
          setTimeout(() => {
            rejectHandler(this.value);
          }, 0);
        } else {
          // If Promise is pending, add handlers to respective callback arrays
          this.onResolveCallbacks.push(resolveHandler);
          this.onRejectCallbacks.push(rejectHandler);
        }
      });
    }
  
    catch(onRejected) {
      // A shorthand for handling only rejection cases
      return this.then(undefined, onRejected);
    }
  
    static resolve(value) {
      // Create a resolved Promise with the provided value
      return new CustomPromise(resolve => resolve(value));
    }
  
    static reject(reason) {
      // Create a rejected Promise with the provided reason
      return new CustomPromise((resolve, reject) => reject(reason));
    }
  
    static all(promises) {
      // Resolve a list of Promises when all of them are resolved
      return new CustomPromise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;
  
        promises.forEach((promise, index) => {
          promise.then(
            value => {
              results[index] = value;
              completedPromises++;
  
              if (completedPromises === promises.length) {
                resolve(results);
              }
            },
            error => {
              reject(error);
            }
          );
        });
      });
    }
  
    static race(promises) {
      // Resolve or reject as soon as one Promise settles among the given Promises
      return new CustomPromise((resolve, reject) => {
        promises.forEach(promise => {
          promise.then(
            value => {
              resolve(value);
            },
            error => {
              reject(error);
            }
          );
        });
      });
    }
  }
  
  // Example usage:
  const promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('Custom Promise Resolved!');
    }, 1000);
  });
  
  promise.then(result => {
    console.log(result); // Output: Custom Promise Resolved!
  }).catch(error => {
    console.error(error);
  });
  